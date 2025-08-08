import type { DefaultCmsPageParams, DefaultCmsPageSearchParams } from "./page-params.types";

/**
 * Default CMS page props type
 */
export type DefaultCmsPageProps<
  TParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageParams,
  TSearchParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageSearchParams,
> = {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
};
