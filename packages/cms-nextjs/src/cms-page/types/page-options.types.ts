import type { Metadata } from "next";
import type { IAdapter } from "@/packages/cms-adapter-core/src/interfaces/IAdapter";
import type { DefaultCmsPageProps } from "./page-props.types";
import type { DefaultCmsPageParams, DefaultCmsPageSearchParams } from "./page-params.types";
import type { ChannelDefinition } from "./channel.types";
import type { GetContentByPathMethod } from "./content-fetching.types";
import type { ICmsClient } from "./cms-client.types";

/**
 * Page creation options type
 */
export type CreatePageOptions<
  TParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageParams,
  TSearchParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageSearchParams,
  Variables extends Record<string, unknown> = { path: string },
  Result = unknown,
> = {
  /**
   * Main function used to retrieve the content by path
   */
  getContentByPath: GetContentByPathMethod<Variables, Result>;

  /**
   * Optional function to get all pages for static generation
   */
  getAllPages?: (client: ICmsClient) => Promise<Result>;

  /**
   * The channel information used to resolve locales, domains and more
   */
  channel?: ChannelDefinition;

  /**
   * Take the props received by the CmsPage from Next.JS and transform those
   * into a path that will be understood by the CMS. The default
   * implementation works with both `/[lang]/[[...path]]` as well as
   * `/[[...path]]`
   *
   * @param       props       The Properties (slugs & search params) received
   *                          by Next.JS
   * @return      The path to be retrieved from Router or getContentByPath
   *              function
   */
  propsToCmsPath: (props: DefaultCmsPageProps<TParams, TSearchParams>) => Promise<string | null>;

  /**
   * Takes the Next.JS route segments and try to transform it into an initial
   * locale code, the default implementation will try to resolve the `lang`
   * route segment using the channel definition.
   *
   * @param       params      The parameters to resolve
   * @param       channel     The channel definition
   * @returns     The resolved locale
   */
  paramsToLocale: (params?: TParams, channel?: ChannelDefinition) => string | undefined;

  /**
   * CMS client instance
   */
  client: ICmsClient;

  /**
   * CMS adapter for transforming CMS-specific data to common format
   */
  adapter: IAdapter;

  /**
   * Optional function to enhance metadata with CMS-specific logic
   */
  enhanceMetadata?: (metadata: Metadata, payload: unknown, adapter: IAdapter) => Promise<Metadata>;

  /**
   * Optional function to enhance content with CMS-specific logic
   */
  enhanceContent?: (content: unknown, adapter: IAdapter) => Promise<unknown>;

  /**
   * Optional function to determine if static generation should be enabled
   */
  enableStaticGeneration?: boolean;

  /**
   * Function to get the site ID for the current request
   */
  getSiteId?: () => Promise<string>;

  /**
   * Function to get the language code for the current request
   */
  getLanguageCode?: () => Promise<string>;
};
