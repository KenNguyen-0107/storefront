import { ImageListBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { IImageItem, IImageList } from "@/packages/niteco-ui/components/types/cms/IImageList";
import {
  mapCommonStyles,
  mapContentImage,
  mapLink,
} from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";

const CMS_BLOCK_TYPE = "ImageListBlock";

export class ImageListBlockTransformer extends LitiumBaseBlockTransformer<ImageListBlock, IImageList> {
  type = CMS_BLOCK_TYPE;

  transform(block: ImageListBlock): IImageList {
    return {
      type: "ImageList",
      contentSpaceX: block.fields?.contentSpaceX?.[0]?.value,
      contentSpaceXDesktop: block.fields?.contentSpaceXDesktop?.[0]?.value,
      contentSpaceY: block.fields?.contentSpaceY?.[0]?.value,
      contentSpaceYDesktop: block.fields?.contentSpaceYDesktop?.[0]?.value,
      numberOfItemOnDesktop: block.fields?.numberOfItemOnDesktop,
      numberOfItemOnMobile: block.fields?.numberOfItemOnMobile,
      style: mapCommonStyles(block.fields?.commonStyles),
      items: block.children?.map((child) => ({
        image: mapContentImage(child.fields.contentImage?.[0]) || undefined,
        navigationLink: mapLink(child.fields.navigationLink),
      })) as IImageItem[],
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new ImageListBlockTransformer());
