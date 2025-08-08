import { ConfigureCommerceBaseBlockTransformer } from "../base/configureCommerceBaseBlockTransformer";
import { RowWidget } from "../../parser/blocks.types";
import {
  ColumnData,
  RowData,
  SectionData,
} from "@/packages/composable-content-engine/types/renderPayload";
import { transformBlocks } from "../../utils/transformBlocks";
import { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";

const CMS_BLOCK_TYPE = "Basic/Row";

export class RowBlockTransformer extends ConfigureCommerceBaseBlockTransformer<
  RowWidget,
  RowData
> {
  type = CMS_BLOCK_TYPE;

  transform(widget: RowWidget): RowData {
    return {
      columns: transformBlocks(
        widget.Children,
        this.transformers as any,
      ) as ColumnData[],
    };
  }
}

ConfigureCommerceTransformerRegistry.register(
  CMS_BLOCK_TYPE,
  new RowBlockTransformer(),
);
