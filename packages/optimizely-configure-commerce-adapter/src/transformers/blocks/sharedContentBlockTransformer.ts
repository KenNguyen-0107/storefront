import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { SharedContentWidget } from "../../parser/blocks.types";
import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";
import { BlockData } from "@/packages/composable-content-engine/types/renderPayload";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";

const CMS_BLOCK_TYPE = "Basic/SharedContent";

export class SharedContentBlockTransformer extends ConfigureCommerceBaseBlockTransformer<
  SharedContentWidget,
  BlockData
> {
  type = CMS_BLOCK_TYPE;

  transform(widget: SharedContentWidget): BlockData {
    //TODO: Implement shared content transformer

    return {};
  }
}

ConfigureCommerceTransformerRegistry.register(CMS_BLOCK_TYPE, new SharedContentBlockTransformer());
