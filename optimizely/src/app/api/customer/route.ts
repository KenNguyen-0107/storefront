import { NextRequest, NextResponse } from "next/server";
import { CustomerService } from "@/app/lib/commercetools/services/customers.service";
import type { CustomerQueryOptions } from "@/app/lib/commercetools/models/customer.model";
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

  // Parse query parameters
  const limit = searchParams.get("limit")
    ? parseInt(searchParams.get("limit")!)
    : undefined;
  const offset = searchParams.get("offset")
    ? parseInt(searchParams.get("offset")!)
    : undefined;
  const sort = searchParams.get("sort")?.split(",") || undefined;

  // Parse filter parameters
  const filters: any = {};

  if (searchParams.get("email")) {
    filters.email = searchParams.get("email");
  }

  if (searchParams.get("firstName")) {
    filters.firstName = searchParams.get("firstName");
  }

  if (searchParams.get("lastName")) {
    filters.lastName = searchParams.get("lastName");
  }

  if (searchParams.get("customerGroup")) {
    filters.customerGroup = searchParams.get("customerGroup");
  }

  if (searchParams.get("companyName")) {
    filters.companyName = searchParams.get("companyName");
  }

  if (searchParams.get("isEmailVerified")) {
    filters.isEmailVerified = searchParams.get("isEmailVerified") === "true";
  }

  // Parse date range filters
  if (searchParams.get("createdAtFrom") || searchParams.get("createdAtTo")) {
    filters.createdAt = {};
    if (searchParams.get("createdAtFrom")) {
      filters.createdAt.from = searchParams.get("createdAtFrom");
    }
    if (searchParams.get("createdAtTo")) {
      filters.createdAt.to = searchParams.get("createdAtTo");
    }
  }

  const options: CustomerQueryOptions = {
    limit,
    offset,
    sort,
    filters: Object.keys(filters).length > 0 ? filters : undefined,
  };

  const result = await customerService.getCustomers(options);

  return NextResponse.json(
    {
      success: true,
      data: result,
    },
    { status: 200 },
  );
});
