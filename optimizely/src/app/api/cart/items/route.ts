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
 * Add item to cart (unified for both authenticated and anonymous users)
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

    let body;
    try {
      body = await request.json();
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError);
      return NextResponse.json(
        {
          success: false,
          error: {
            message: "Request body does not contain valid JSON",
            code: ERROR_CODES.INVALID_CREDENTIALS,
          },
        },
        { status: 400 },
      );
    }

    // Validate required fields
    if (!body.cartId || !body.sku || body.quantity === undefined) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message:
              "Missing required fields: cartId, sku, and quantity are required",
            code: ERROR_CODES.MISSING_CREDENTIALS,
          },
        },
        { status: 400 },
      );
    }

    // Ensure cartVersion is a number
    const cartVersion =
      typeof body.cartVersion === "string"
        ? parseInt(body.cartVersion, 10)
        : body.cartVersion;

    const result = await cartService.addLineItem(body.cartId, cartVersion, {
      sku: body.sku,
      quantity: body.quantity,
    });

    // Return the direct result from cartService
    const statusCode = result.success ? 200 : 400;
    return NextResponse.json(result, { status: statusCode });
  },
);

/**
 * Remove item from cart (unified for both authenticated and anonymous users)
 */
export const DELETE = apiRoute(
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

    const result = await cartService.removeLineItem(
      body.cartId,
      body.cartVersion,
      {
        lineItemId: body.lineItemId,
        quantity: body.quantity,
      },
    );

    // Return the direct result from cartService
    const statusCode = result.success ? 200 : 400;
    return NextResponse.json(result, { status: statusCode });
  },
);

/**
 * Update item quantity in cart (unified for both authenticated and anonymous users)
 */
export const PATCH = apiRoute(
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

    const result = await cartService.updateLineItem(
      body.cartId,
      body.cartVersion,
      {
        lineItemId: body.lineItemId,
        quantity: body.quantity,
      },
    );

    // Return the direct result from cartService
    const statusCode = result.success ? 200 : 400;
    return NextResponse.json(result, { status: statusCode });
  },
);
