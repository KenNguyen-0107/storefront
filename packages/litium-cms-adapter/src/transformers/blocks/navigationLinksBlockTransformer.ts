import { NavigationLinksBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { INavigationLinks } from "@/packages/niteco-ui/components/types/cms/INavigationLinks";
import { mapLink } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";

const CMS_BLOCK_TYPE = "NavigationLinksBlock";

export class NavigationLinksBlockTransformer extends LitiumBaseBlockTransformer<
  NavigationLinksBlock,
  INavigationLinks
> {
  type = CMS_BLOCK_TYPE;

  transform(block: NavigationLinksBlock): INavigationLinks {
    // Transform navigation links array
    const navigationLinks =
      block.fields?.navigationLinks?.map((item) => mapLink(item.navigationLink)).filter((link) => link !== undefined) ||
      [];

    return {
      type: "NavigationLinks",
      collapsibleMobile: block.fields?.collapsibleMobile,
      headerLabel: block.fields?.headerLabel,
      navigationLinksHeader: block.fields?.navigationLinksHeader
        ? mapLink(block.fields.navigationLinksHeader)
        : undefined,
      navigationLinks,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new NavigationLinksBlockTransformer());
