import { GraphQLClient } from "graphql-request";
import { RenderPayload } from "@/packages/composable-content-engine/types/renderPayload";

export type GetContentByPathVariables<LocaleType = string> = {
  path: string;
  locale?: Array<LocaleType> | LocaleType;
  siteId?: string;
};

type MayBe<T> = T extends Array<infer R> ? Array<R | null> | null : T | null;

export type GetContentByPathResponse = {
  data: RenderPayload;
};

export type GetMetaDataByPathResponse = {
  getGenericMetaData?: {
    items?: Array<{
      name?: string;
      alternatives?: Array<{
        locale?: string | null;
        href?: string | null;
      } | null> | null;
      canonical?: string | null;
    } | null>;
  };
};

export type GetContentByPathMethod<Variables extends Record<string, any> = { path: string }, Result = any> = (
  client: GraphQLClient,
  variables: Variables
) => Promise<Result>;

export type GetMetaDataByPathMethod<Variables extends Record<string, any> = { path: string }, Result = any> = (
  client: GraphQLClient,
  variables: Variables
) => Promise<Result>;

export const getMetaDataByPath: GetMetaDataByPathMethod = (client, variables) => {
  return client.request<GetMetaDataByPathResponse, GetContentByPathVariables>(metadataQuery, variables);
};

export const getContentByPath: GetContentByPathMethod = (client, variables) => {
  return client.request<GetContentByPathResponse, GetContentByPathVariables>(contentQuery, variables);
};

export default getContentByPath;

const contentQuery = "";

const metadataQuery = "";
