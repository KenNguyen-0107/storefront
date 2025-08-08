import { type NextRequest, NextResponse } from "next/server";

// Simple success response
export function successResponse(data: any) {
  return NextResponse.json(data);
}

// Simple error response
export function errorResponse(message: string, status = 400) {
  console.error("API Error:", message);
  return NextResponse.json({ error: message }, { status });
}

// Get request body
export async function getBody(request: NextRequest) {
  return await request.json();
}

// Check required fields
export function checkFields(body: any, fields: string[]) {
  const missing = fields.filter((field) => !body[field]);
  if (missing.length > 0) {
    throw new Error(`Missing: ${missing.join(", ")}`);
  }
}

// Simple API wrapper with basic error handling
export function apiRoute(
  handler: (request: NextRequest) => Promise<NextResponse>,
) {
  return async (request: NextRequest) => {
    try {
      return await handler(request);
    } catch (error: any) {
      return errorResponse(error.message || "Request failed");
    }
  };
}

// API wrapper for dynamic routes with params
export function apiRouteWithParams<T = Record<string, string>>(
  handler: (
    request: NextRequest,
    context: { params: Promise<T> },
  ) => Promise<NextResponse>,
) {
  return async (request: NextRequest, context: { params: Promise<T> }) => {
    try {
      return await handler(request, context);
    } catch (error: any) {
      return errorResponse(error.message || "Request failed");
    }
  };
}
