import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import type { CustomerUpdateRequest } from "@/app/lib/commercetools/models/customer.model";
import {
  ERROR_CODES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from "@/app/lib/commercetools/utils/error.utils";
import { apiRouteWithParams } from "@/app/lib/commercetools/utils/api-helpers";

const customerService = new CustomerService();

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const GET = apiRouteWithParams<{ id: string }>(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
  ) => {
    const { id } = await params;

    const customer = await customerService.getCustomerById(id);

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

export const PATCH = apiRouteWithParams<{ id: string }>(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
  ) => {
    const { id } = await params;
    const body: CustomerUpdateRequest = await request.json();

    const customer = await customerService.updateCustomer(id, body);

    return NextResponse.json(
      {
        success: true,
        data: customer,
      },
      { status: 200 },
    );
  },
);

export const DELETE = apiRouteWithParams<{ id: string }>(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
  ) => {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const version = searchParams.get("version");

    if (!version) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: ERROR_MESSAGES.VERSION_PARAMETER_REQUIRED,
            code: ERROR_CODES.MISSING_VERSION,
          },
        },
        { status: 400 },
      );
    }

    await customerService.deleteCustomer(id, parseInt(version));

    return NextResponse.json(
      {
        success: true,
        message: SUCCESS_MESSAGES.CUSTOMER_DELETED_SUCCESSFULLY,
      },
      { status: 200 },
    );
  },
);
