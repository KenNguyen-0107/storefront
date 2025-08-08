import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import type { PasswordResetTokenRequest } from "@/app/lib/commercetools/models/customer.model";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

const customerService = new CustomerService();

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const POST = apiRoute(async (request: NextRequest) => {
  const body: PasswordResetTokenRequest = await request.json();

  await customerService.requestPasswordReset(body);

  return NextResponse.json(
    {
      success: true,
      message: SUCCESS_MESSAGES.PASSWORD_RESET_EMAIL_SENT_SUCCESSFULLY,
    },
    { status: 200 },
  );
});
