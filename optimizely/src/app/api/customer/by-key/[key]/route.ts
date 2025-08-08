import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRouteWithParams } from "@/app/lib/commercetools/utils/api-helpers";

const customerService = new CustomerService();

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = apiRouteWithParams<{ key: string }>(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ key: string }> },
  ) => {
    const { key } = await params;

    const customer = await customerService.getCustomerByKey(key);

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
  },
);
