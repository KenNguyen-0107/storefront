import { NextRequest } from "next/server";
import { ClientBuilder } from "@commercetools/ts-client";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import type { CommerceToolsClient } from "@/app/lib/commercetools/types/client.types";

export function extractBearerToken(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.substring(7); // Remove "Bearer " prefix
}

export function createClientWithExistingToken(
  accessToken: string,
): CommerceToolsClient {
  const client = new ClientBuilder()
    .withExistingTokenFlow(`Bearer ${accessToken}`, { force: true })
    .withHttpMiddleware({
      host: process.env.CTP_API_URL!,
    })
    .withProjectKey(process.env.CTP_PROJECT_KEY!)
    .build();

  return createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: process.env.CTP_PROJECT_KEY!,
  });
}

export function createClientFromRequest(
  request: NextRequest,
): CommerceToolsClient | null {
  const accessToken = extractBearerToken(request);
  if (!accessToken) {
    return null;
  }
  return createClientWithExistingToken(accessToken);
}
