import { NextRequest, NextResponse } from "next/server";
import { tokenService } from "@/app/lib/commercetools/services/token.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  createErrorResponseFromError,
  getErrorStatusCode,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const POST = apiRoute(async (request: NextRequest) => {
  const { refreshToken } = await request.json();

  const result = await tokenService.refreshToken(refreshToken);

  if (!result.success) {
    let statusCode = 500;
    if (result.error?.code === ERROR_CODES.MISSING_REFRESH_TOKEN) {
      statusCode = 400;
    } else if (result.error?.code === ERROR_CODES.REFRESH_TOKEN_FAILED) {
      statusCode = 401;
    }

    return NextResponse.json(result, { status: statusCode });
  }

  return NextResponse.json(result, { status: 200 });
});
