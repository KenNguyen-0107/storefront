import { NavigationItem, BannerItemBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";
import { INavigationItem } from "@/packages/niteco-ui/components/types/cms/INavigation";
import { mapLink } from "../../utils/transformerDefinitions";
import { IBanner } from "@/packages/niteco-ui/components/types/cms/IBanner";

const CMS_BLOCK_TYPE = "NavigationItemBlock";

export class NavigationItemTransformer extends LitiumBaseBlockTransformer<NavigationItem, INavigationItem> {
  type = CMS_BLOCK_TYPE;

  transform(block: NavigationItem): INavigationItem {
    const children = block.children?.map((child) => this.transform(child));

    let content: IBanner | undefined;
    if (block.fields?.bannerItem && block.fields.bannerItem.length > 0) {
      // Convert NavigationBannerItem to BannerItemBlock format
      const bannerItem = block.fields.bannerItem[0];
      content = transformBlocks(
        [
          {
            __typename: "BannerItemBlock",
            fields: {
              _name: "",
              contentImage: [
                {
                  __typename: "ContentImage",
                  image: bannerItem.image,
                  imageMobile: bannerItem.imageMobile,
                  imageAltText: bannerItem.imageAltText,
                  imageHeight: "",
                  imageWidth: "",
                  imageMobileHeight: "",
                  imageMobileWidth: "",
                  isFullWidthImage: bannerItem.isFullWidthImage,
                },
              ],
              button: bannerItem.buttonLink
                ? [
                    {
                      __typename: "Button",
                      buttonLink: bannerItem.buttonLink,
                      buttonType: bannerItem.buttonType || [],
                    },
                  ]
                : undefined,
              ...bannerItem,
            },
          } as BannerItemBlock,
        ],
        this.transformers as any
      )[0] as IBanner;
    }

    return {
      link: mapLink(block.fields?.navigationLink),
      content,
      children: children || [],
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new NavigationItemTransformer());
