import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import { createClientWithExistingToken } from "@/app/lib/commercetools/utils/auth-token.utils";
import type { CustomerSignInRequest } from "@/app/lib/commercetools/models/customer.model";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const POST = apiRoute(async (request: NextRequest) => {
  const body: CustomerSignInRequest = await request.json();

  // Step 1: Get access token from the new token endpoint
  const tokenResponse = await fetch(
    `${request.nextUrl.origin}/api/auth/password-token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    },
  );

  if (!tokenResponse.ok) {
    const tokenError = await tokenResponse.json();
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ERROR_MESSAGES.INVALID_CREDENTIALS,
          code: ERROR_CODES.SIGNIN_FAILED,
        },
      },
      { status: 401 },
    );
  }

  const tokenData = await tokenResponse.json();

  // Step 2: Use token to get customer data and handle cart migration
  const client = createClientWithExistingToken(tokenData.data.access_token);
  const customerService = new CustomerService(client);

  // Get customer profile
  const customer = await customerService.getProfile();

  // Handle cart migration if anonymous cart exists
  let migratedCart = null;
  if (body.anonymousCartId) {
    const signinRequest: CustomerSignInRequest = {
      ...body,
      anonymousCartId: body.anonymousCartId,
      anonymousCartSignInMode:
        body.anonymousCartSignInMode || "MergeWithExistingCustomerCart",
      anonymousId: body.anonymousId,
    };

    const customerResult = await customerService.signIn(signinRequest);
    migratedCart = customerResult.cart;
  }

  return NextResponse.json(
    {
      success: true,
      data: {
        customer,
        token: tokenData.data, // Return token data to frontend
        cart: migratedCart,
      },
      meta: {
        cartMigrated: !!body.anonymousCartId,
        previousAnonymousId: body.anonymousId,
      },
    },
    { status: 200 },
  );
});
