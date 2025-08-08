import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { RichContentWidget } from "../../parser/blocks.types";
import { IRichContent } from "@/packages/niteco-ui/components/types/cms/IRichContent";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";

const CMS_BLOCK_TYPE = "Basic/RichContent";

export class RichContentBlockTransformer extends ConfigureCommerceBaseBlockTransformer<
  RichContentWidget,
  IRichContent
> {
  type = CMS_BLOCK_TYPE;

  transform(widget: RichContentWidget): IRichContent {
    return {
      type: this.getComponentName(columnTypeComponents.RichText),
      content: widget.Content || undefined,
      backgroundColorHex: widget.BackgroundColor || undefined,
    };
  }
}

ConfigureCommerceTransformerRegistry.register(
  CMS_BLOCK_TYPE,
  new RichContentBlockTransformer(),
);
