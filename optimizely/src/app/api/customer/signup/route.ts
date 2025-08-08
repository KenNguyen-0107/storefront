import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import type { CustomerRegistrationRequest } from "@/app/lib/commercetools/models/customer.model";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  createErrorResponseFromError,
  getErrorStatusCode,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

const customerService = new CustomerService();

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const POST = apiRoute(async (request: NextRequest) => {
  const body: CustomerRegistrationRequest = await request.json();

  // Step 1: Create customer account
  const customerService = new CustomerService();
  const result = await customerService.signUp(body);

  // Step 2: Get access token for the new customer
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

  let tokenData = null;
  if (tokenResponse.ok) {
    const tokenResult = await tokenResponse.json();
    tokenData = tokenResult.data;
  }

  return NextResponse.json(
    {
      success: true,
      data: {
        customer: result.customer,
        cart: result.cart,
        token: tokenData, // Provide token if authentication succeeded
      },
    },
    { status: 201 },
  );
});
