import "server-only";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

import { ComponentFactory } from "@/packages/cms-component-registry/src/types";
import { RenderDynamicContent } from "@/packages/composable-content-engine/RenderDynamicContent";

import type { DefaultCmsPageParams, DefaultCmsPageSearchParams } from "./types/page-params.types";
import type { GetContentByPathMethod } from "./types/content-fetching.types";
import type { CreatePageOptions } from "./types/page-options.types";
import type { CmsNextJsPage } from "./types/page-definition.types";
import { getCmsType } from "../utils";
import { CmsContent } from "@/packages/optimizely-cms-react/src/components/rsc";
import { ServerContext } from "@/packages/optimizely-cms-react/src/context/rsc";
import { createClient } from "../client";

import { normalizeContentLinkWithLocale } from "@/packages/optimizely-graph-client/src";
import { type IOptiGraphClient } from "@/packages/optimizely-graph-client/src/client";
import { Utils } from "@/packages/optimizely-cms-react/src/rsc";
import { ContextWith } from "./types/utility.types";

export type {
  DefaultCmsPageParams,
  DefaultCmsPageSearchParams,
  GetContentByPathMethod,
  CreatePageOptions,
  CmsNextJsPage,
};

// Default content fetching implementation
const defaultGetContentByPath: GetContentByPathMethod = async (client, variables) => {
  return client.fetchContent(variables.path as string, variables);
};

const CreatePageOptionDefaults: Partial<
  CreatePageOptions<DefaultCmsPageParams, DefaultCmsPageSearchParams, { path: string }, unknown>
> = {
  getContentByPath: defaultGetContentByPath,
  propsToCmsPath: async ({ params }) => {
    const processedParams = await params;
    return buildRequestPath(processedParams);
  },

  paramsToLocale: (params, channel) => {
    if (!channel) return undefined;
    const lang = (params as Record<string, string | string[] | undefined>)?.lang;
    const toTest = Array.isArray(lang) ? lang.at(0) : lang;
    if (!toTest) return channel.defaultLocale;
    return channel.slugToLocale?.(toTest.toString()) || channel.defaultLocale;
  },

  enableStaticGeneration: false,
  getSiteId: () => Promise.resolve(process.env.SITE_ID || ""),
  getLanguageCode: () => Promise.resolve(process.env.SITE_LANGUAGE || "en"),
};

/**
 * Generate the React Server Side component and Next.JS functions needed to render a
 * CMS-agnostic page. This component assumes that the routes are either defined as
 * /[lang]/[[...path]] or /[[...path]]
 *
 * @param       factory         The component factory to use for this page
 * @param       options         The page component generation options
 * @returns     The CMS-agnostic Page
 */
export function createPage<
  TParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageParams,
  TSearchParams extends Record<string, string | Array<string> | undefined> = DefaultCmsPageSearchParams,
  Variables extends Record<string, unknown> = { path: string; siteId?: string; languageCode?: string },
  Result = unknown,
>(
  factory: ComponentFactory,
  options: CreatePageOptions<TParams, TSearchParams, Variables, Result>
): CmsNextJsPage<TParams, TSearchParams> {
  // Build the global/shared configuration for the CMS Page
  const {
    getContentByPath,
    getAllPages,
    propsToCmsPath,
    client,
    adapter,
    enhanceMetadata,
    enhanceContent,
    enableStaticGeneration,
    getSiteId,
    getLanguageCode,
    channel,
    paramsToLocale,
  } = {
    ...CreatePageOptionDefaults,
    ...options,
  } as CreatePageOptions<TParams, TSearchParams, Variables, Result>;

  const pageDefinition: CmsNextJsPage<TParams, TSearchParams> = {
    generateStaticParams: async () => {
      if (!enableStaticGeneration || !getAllPages) {
        return Promise.resolve([]);
      }

      try {
        const response = await getAllPages(client);
        const staticParams: TParams[] = [];

        // Let the adapter handle the static params generation
        if (adapter && typeof (adapter as unknown as Record<string, unknown>).generateStaticParams === "function") {
          const generateStaticParams = (adapter as unknown as Record<string, unknown>).generateStaticParams as (
            response: unknown
          ) => Promise<TParams[]>;
          return await generateStaticParams(response);
        }

        return staticParams;
      } catch (error) {
        console.warn("Failed to generate static params:", error);
        return [];
      }
    },

    generateMetadata: async ({ params, searchParams }) => {
      // Read variables from request
      const requestPath = await propsToCmsPath({ params, searchParams });
      if (!requestPath || requestPath.startsWith("/_next/") || requestPath.startsWith("/.well-known/"))
        return Promise.resolve({});

      // Fetch the metadata based upon the actual content type and resolve parent
      const requestVars = {
        path: requestPath,
        siteId: await getSiteId?.(),
        languageCode: await getLanguageCode?.(),
      } as unknown as Variables;

      const response = await getContentByPath(client, requestVars);
      const payload = await adapter.getPageData(response);

      // Build base metadata from adapter
      const metadata: Metadata = {};
      if (payload.meta) {
        if (payload.meta.title) {
          metadata.title = payload.meta.title as string;
        }
        if (payload.meta.ogTitle) {
          metadata.openGraph = {
            ...(metadata.openGraph || {}),
            title: payload.meta.ogTitle as string,
          };
        }
        if (payload.meta.ogDescription) {
          metadata.openGraph = {
            ...(metadata.openGraph || {}),
            description: payload.meta.ogDescription as string,
          };
        }
        if (payload.meta.ogType) {
          metadata.openGraph = {
            ...(metadata.openGraph || {}),
            type: payload.meta.ogType as "video.other",
          };
        }
        if (payload.meta.ogLocale) {
          metadata.openGraph = {
            ...(metadata.openGraph || {}),
            locale: payload.meta.ogLocale as string,
          };
        }
        if (payload.meta.ogUrl) {
          metadata.openGraph = {
            ...(metadata.openGraph || {}),
            url: payload.meta.ogUrl as string,
          };
        }
        if (payload.meta.robots) {
          metadata.robots = payload.meta.robots as string;
        }
        if (payload.meta.language) {
          metadata.alternates = {
            ...(metadata.alternates || {}),
            languages: { [String(payload.meta.language)]: "" },
          };
        }
        if (Array.isArray(payload.meta.links)) {
          metadata.icons = [];
          metadata.other = {};
          for (const link of payload.meta.links) {
            if (
              link.attributes?.rel === "icon" ||
              link.attributes?.rel === "apple-touch-icon" ||
              link.attributes?.rel === "shortcut icon"
            ) {
              metadata.icons.push({
                url: link.href,
                rel: link.attributes.rel,
                sizes: link.attributes.sizes,
                type: link.attributes.type,
              });
            } else if (link.attributes?.rel === "canonical") {
              metadata.alternates = {
                ...(metadata.alternates || {}),
                canonical: link.href,
              };
            } else {
              // Add any other rel types to metadata.other
              metadata.other[link.attributes?.rel || "link"] = link.href;
            }
          }
          if (metadata.icons.length === 0) {
            delete metadata.icons;
          }
          if (Object.keys(metadata.other).length === 0) {
            delete metadata.other;
          }
        }
      }

      // Apply custom metadata enhancement if provided
      if (enhanceMetadata) {
        return await enhanceMetadata(metadata, payload, adapter);
      }

      return metadata;
    },

    CmsPage: async ({ params, searchParams }) => {
      // Analyze the Next.JS Request props
      const requestPath = await propsToCmsPath({ params, searchParams });

      // If we don't have the path, or the path is an internal Next.js route reject it.
      if (!requestPath || requestPath.startsWith("/_next/") || requestPath.startsWith("/storage/")) return notFound();

      const requestVars = {
        path: requestPath,
        siteId: getSiteId ? await getSiteId() : undefined,
        languageCode: getLanguageCode ? await getLanguageCode() : undefined,
      } as unknown as Variables;

      // Resolve the content based upon the path
      const contentResponse = await getContentByPath(client, requestVars);
      // Apply custom content enhancement if provided
      const enhancedContent = enhanceContent ? await enhanceContent(contentResponse, adapter) : contentResponse;

      const cmsType = getCmsType();

      switch (cmsType) {
        case "optimizely":
          const context = buildContext(factory, createClient());
          const initialLocale = paramsToLocale(await params, channel);
          if (initialLocale) context.setLocale(initialLocale);

          const info = (enhancedContent as any)?.content?.items;
          const contentType = Utils.normalizeContentType(info?._metadata?.types);
          const contentLink = normalizeContentLinkWithLocale(info?._metadata);

          if (!contentLink) {
            return notFound();
          }

          return (
            <CmsContent
              contentType={contentType}
              contentLink={contentLink}
              fragmentData={info ?? undefined}
              ctx={context}
            />
          );
        default:
          const headersList = await headers();
          const userAgent = headersList.get("user-agent") || "";
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
          // Transform content through adapter
          const contentPayload = await adapter.getPageData(enhancedContent);

          return <RenderDynamicContent payload={contentPayload} isMobile={isMobile} />;
      }
    },
  };

  return pageDefinition;
}

/**
 * Builds the request path from the given parameters
 *
 * @param   param0  The URL parameters
 * @returns The request path as understood by the CMS
 */
function buildRequestPath({ lang, path }: { lang?: string | null; path?: (string | null)[] | null }): string {
  const slugs: string[] = [];
  if (path) slugs.push(...(path.filter((x) => x) as string[]));
  if (lang) slugs.unshift(lang);
  if (slugs.length == 0) return "/";

  const fullPath =
    "/" +
    slugs
      .filter((x) => x && x.length > 0)
      .map((x) => decodeURIComponent(x))
      .join("/");
  if (!slugs[slugs.length - 1].includes(".")) return fullPath + "/";
  return fullPath;
}

function buildContext(
  factory: ComponentFactory,
  client: IOptiGraphClient,
  initialLocale: string = "en"
): ContextWith<ServerContext, "client" | "locale"> {
  return new ServerContext({
    factory,
    client,
    mode: "public",
    locale: initialLocale,
  }) as ContextWith<ServerContext, "client" | "locale">;
}
