import { NextRequest, NextResponse } from "next/server";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const POST = apiRoute(async (request: NextRequest) => {
  // No server-side action needed since tokens are managed by frontend
  // Optionally implement token revocation if needed

  return NextResponse.json(
    {
      success: true,
      message: SUCCESS_MESSAGES.SUCCESSFULLY_SIGNED_OUT,
    },
    { status: 200 },
  );
});

// Support GET method for convenience (e.g., redirect URLs)
export const GET = POST;
