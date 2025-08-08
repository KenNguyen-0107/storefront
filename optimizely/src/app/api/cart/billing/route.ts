import { NextRequest, NextResponse } from "next/server";
import { createClientFromRequest } from "@/app/lib/commercetools/utils/auth-token.utils";
import { CartService } from "@/app/lib/commercetools/services/cart.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Set billing address for cart (unified for both authenticated and anonymous users)
 */
export const POST = apiRoute(
  async (request: NextRequest): Promise<NextResponse> => {
    const client = createClientFromRequest(request);

    if (!client) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.AUTHORIZATION_HEADER_REQUIRED,
            code: ERROR_CODES.TOKEN_REQUIRED,
          },
        },
        { status: 401 },
      );
    }

    const cartService = new CartService(client);
    const body = await request.json();

    const cart = await cartService.setBillingAddress(
      body.cartId,
      body.cartVersion,
      body.address,
    );

    return NextResponse.json({
      success: true,
      data: cart,
    });
  },
);
