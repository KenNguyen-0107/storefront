import { NextRequest, NextResponse } from "next/server";
import { createClientFromRequest } from "@/app/lib/commercetools/utils/auth-token.utils";
import { CartService } from "@/app/lib/commercetools/services/cart.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  createErrorResponse,
  createErrorResponseFromError,
  getErrorStatusCode,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Apply discount code to cart (unified for both authenticated and anonymous users)
 */
export const POST = apiRoute(
  async (request: NextRequest): Promise<NextResponse> => {
    const client = createClientFromRequest(request);

    if (!client) {
      const errorResponse = createErrorResponse(
        ERROR_CODES.TOKEN_REQUIRED,
        ERROR_MESSAGES.AUTHORIZATION_HEADER_REQUIRED,
      );
      return NextResponse.json(errorResponse, { status: 401 });
    }

    const cartService = new CartService(client);
    const body = await request.json();

    const cart = await cartService.applyDiscountCode(
      body.cartId,
      body.cartVersion,
      body.code,
    );

    return NextResponse.json({
      success: true,
      data: cart,
      message: SUCCESS_MESSAGES.DISCOUNT_CODE_APPLIED_SUCCESSFULLY,
    });
  },
);

/**
 * Remove discount code from cart (unified for both authenticated and anonymous users)
 */
export const DELETE = apiRoute(
  async (request: NextRequest): Promise<NextResponse> => {
    const client = createClientFromRequest(request);

    if (!client) {
      const errorResponse = createErrorResponse(
        ERROR_CODES.TOKEN_REQUIRED,
        ERROR_MESSAGES.AUTHORIZATION_HEADER_REQUIRED,
      );
      return NextResponse.json(errorResponse, { status: 401 });
    }

    const cartService = new CartService(client);
    const body = await request.json();

    const cart = await cartService.removeDiscountCode(
      body.cartId,
      body.cartVersion,
      body.discountCodeId,
    );

    return NextResponse.json({
      success: true,
      data: cart,
      message: SUCCESS_MESSAGES.DISCOUNT_CODE_REMOVED_SUCCESSFULLY,
    });
  },
);
