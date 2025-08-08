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
 * Get active cart (unified for both authenticated and anonymous users)
 */
export const GET = apiRoute(
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
    const cartId = request.nextUrl.searchParams.get("cartId");

    const result = await cartService.getCart(cartId);

    // Return the direct result from cartService
    return NextResponse.json(result);
  },
);

/**
 * Create a new cart (unified for both authenticated and anonymous users)
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
    const result = await cartService.createCart(body);

    // Return the direct result from cartService with appropriate status
    const statusCode = result.success ? 201 : 400;
    return NextResponse.json(result, { status: statusCode });
  },
);
