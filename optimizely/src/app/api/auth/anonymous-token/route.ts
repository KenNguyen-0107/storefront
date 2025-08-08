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
  const body = await request.json().catch(() => ({}));
  const { anonymousId } = body;

  const result = await tokenService.getAnonymousToken(anonymousId);

  if (!result.success) {
    const statusCode =
      result.error?.code === ERROR_CODES.ANONYMOUS_AUTH_FAILED ? 401 : 500;
    return NextResponse.json(result, { status: statusCode });
  }

  return NextResponse.json(result, { status: 200 });
});
