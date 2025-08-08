import type { IOptiGraphClient } from "@niteco/optimizely-graph-client";
import type { CmsComponent, ContentLink } from "@/packages/optimizely-cms-react/src/types";
import type { Metadata } from "next";

export type OptimizelyNextPage<T = {}> = CmsComponent<T> & {
  getMetaData?: (
    contentLink: ContentLink,
    locale: string | null | undefined,
    client: IOptiGraphClient
  ) => Promise<Metadata>;
};
