import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRoute } from "@/app/lib/commercetools/utils/api-helpers";

const customerService = new CustomerService();

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = apiRoute(async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ERROR_MESSAGES.EMAIL_PARAMETER_REQUIRED,
          code: ERROR_CODES.MISSING_EMAIL,
        },
      },
      { status: 400 },
    );
  }

  const customer = await customerService.getCustomerByEmail(email);

  if (!customer) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: ERROR_MESSAGES.CUSTOMER_NOT_FOUND,
          code: ERROR_CODES.CUSTOMER_NOT_FOUND,
        },
      },
      { status: 404 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: customer,
    },
    { status: 200 },
  );
});
