import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import type { ChangePasswordRequest } from "@/app/lib/commercetools/models/customer.model";
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
  const body: ChangePasswordRequest = await request.json();

  const customer = await customerService.changePassword(body);

  return NextResponse.json(
    {
      success: true,
      data: customer,
      message: SUCCESS_MESSAGES.PASSWORD_CHANGED_SUCCESSFULLY,
    },
    { status: 200 },
  );
});
