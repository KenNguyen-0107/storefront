import type { Metadata, ResolvingMetadata } from "next";
import type { ReactNode } from "react";
import type { DefaultCmsPageProps } from "./page-props.types";
import type { DefaultCmsPageParams, DefaultCmsPageSearchParams } from "./page-params.types";

/**
 * CMS NextJS Page type definition
 */
export type CmsNextJsPage<
  TParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageParams,
  TSearchParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageSearchParams,
> = {
  /**
   * Default implementation for the `generateStaticParams` export of a
   * Next.JS Page.
   *
   * @returns     The list of routes that should be pre-rendered by Next.JS
   */
  generateStaticParams: () => Promise<TParams[]>;

  /**
   * Default implementation for the `generateMetadata` export, which builds
   * the metadata for the given route within the Next.JS app.
   *
   * @param       props           The properties of the page
   * @param       resolving       The metadata that is currently resolving
   * @returns     Updated metadata
   */
  generateMetadata: (
    props: DefaultCmsPageProps<TParams, TSearchParams>,
    resolving: ResolvingMetadata
  ) => Promise<Metadata>;

  /**
   * The actual component that performs the page rendering
   *
   * @param       props           The properties of the page
   * @returns     The component to render the page
   */
  CmsPage: (props: DefaultCmsPageProps<TParams, TSearchParams>) => Promise<ReactNode>;
};
