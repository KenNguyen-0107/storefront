import { type PropsWithChildren, type ReactNode } from "react";
import { type Metadata, type ResolvingMetadata } from "next";
import type { ChannelDefinition } from "@/packages/optimizely-graph-client/src/services";
import type { DefaultCmsPageProps } from "./types/page-props.types";
import { type GetMetaDataByPathMethod } from "./data.js";
import { LitiumGraphConfig } from "@/packages/litium-graph-client/src/config.js";
import { GraphQLClient } from "graphql-request";
import { OptimizelyGraphConfig } from "@/packages/optimizely-graph-client/src/config.js";

export type CmsPageLayout = {
  generateMetadata: (
    props: Omit<DefaultCmsPageProps, "searchParams">,
    resolving: ResolvingMetadata
  ) => Promise<Metadata>;
  PageLayout: (props: PropsWithChildren<Omit<DefaultCmsPageProps, "searchParams">>) => ReactNode;
};

export type CreateLayoutOptions = {
  defaultLocale: string | null;
  getMetaDataByPath: GetMetaDataByPathMethod;
  client: (config: OptimizelyGraphConfig | LitiumGraphConfig, token?: string) => GraphQLClient;
  channel?: ChannelDefinition;
};
