import "server-only";
import { createEditPageComponent } from "@/packages/cms-nextjs/src/ope";
import { getContentById } from "@/packages/cms-nextjs/src/ope/data";
import { getFactory } from "@/packages/cms-component-registry/src/factoryRegistry";
import { createClient } from "@niteco/optimizely-graph-client";

export default createEditPageComponent(getFactory(), {
  loader: getContentById,
  clientFactory: (token?: string) =>
    createClient(undefined, token, {
      nextJsFetchDirectives: true,
      cache: false,
      queryCache: false,
    }),
  refreshTimeout: 500, // Enable this line when you have issues with the preview not updating at all
});

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs";
