import { NextRequest, NextResponse } from "next/server";
import { createClientFromRequest } from "@/app/lib/commercetools/utils/auth-token.utils";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Get customer profile using user-authenticated CommerceTools client
 */
export const GET = apiRoute(
  async (request: NextRequest): Promise<NextResponse> => {
    const client = createClientFromRequest(request);

    if (!client) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.AUTHENTICATION_REQUIRED,
            code: ERROR_CODES.AUTH_REQUIRED,
          },
        },
        { status: 401 },
      );
    }

    const customerService = new CustomerService(client);

    // Validate token by making a test request
    try {
      const customer = await customerService.getProfile();
      return NextResponse.json(
        {
          success: true,
          data: customer,
        },
        { status: 200 },
      );
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.INVALID_OR_EXPIRED_TOKEN,
            code: ERROR_CODES.AUTH_FAILED,
          },
        },
        { status: 401 },
      );
    }
  },
);

/**
 * Update customer profile using user-authenticated CommerceTools client
 */
export const PUT = apiRoute(
  async (request: NextRequest): Promise<NextResponse> => {
    const client = createClientFromRequest(request);

    if (!client) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.AUTHENTICATION_REQUIRED,
            code: ERROR_CODES.AUTH_REQUIRED,
          },
        },
        { status: 401 },
      );
    }

    const customerService = new CustomerService(client);

    // Validate token by making a test request first
    try {
      await customerService.getProfile();
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.INVALID_OR_EXPIRED_TOKEN,
            code: ERROR_CODES.AUTH_FAILED,
          },
        },
        { status: 401 },
      );
    }

    const body = await request.json();

    // Update customer profile using customer service
    const updatedCustomer = await customerService.updateProfile(
      body.actions || [],
    );

    return NextResponse.json(
      {
        success: true,
        data: updatedCustomer,
      },
      { status: 200 },
    );
  },
);

// PATCH uses the same logic as PUT
export const PATCH = PUT;
