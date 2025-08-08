import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { GridWidget } from "../../parser/blocks.types";
import { BlockData, ColumnData } from "@/packages/composable-content-engine/types/renderPayload";
import { transformBlocks } from "../../utils/transformBlocks";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";

const CMS_BLOCK_TYPE = "Basic/Grid";

export class GridBlockTransformer extends ConfigureCommerceBaseBlockTransformer<GridWidget, ColumnData> {
  type = CMS_BLOCK_TYPE;

  transform(widget: GridWidget): ColumnData {
    return {
      blocks: transformBlocks(widget.Children, this.transformers as any) as BlockData[],
    };
  }
}

ConfigureCommerceTransformerRegistry.register(CMS_BLOCK_TYPE, new GridBlockTransformer());
