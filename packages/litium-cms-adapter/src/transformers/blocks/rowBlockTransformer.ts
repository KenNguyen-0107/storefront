import { RowData, ColumnData } from "@/packages/composable-content-engine/types/renderPayload";
import { mapCommonStyles } from "@/packages/litium-cms-adapter/src/utils/transformerDefinitions";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";
import { ColumnBlock, ContentBlock, RowBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";

const CMS_BLOCK_TYPE = "RowBlock";

export class RowBlockTransformer extends LitiumBaseBlockTransformer<RowBlock, RowData> {
  type = CMS_BLOCK_TYPE;

  transform(block: RowBlock): RowData {
    let columns: ColumnData[] = [];

    if (block.children && block.children.length > 0) {
      const allAreColumnBlocks = block.children.every((child) => child.__typename === "ColumnBlock");

      if (allAreColumnBlocks) {
        // Use the transformer system for ColumnBlock
        columns = (block.children as ColumnBlock[]).map((column: ColumnBlock) => {
          const transformedColumn = transformBlocks([column], this.transformers as any)[0] as ColumnData;
          return transformedColumn;
        });
      } else {
        columns = [
          {
            blocks: transformBlocks(block.children as ContentBlock[], this.transformers as any),
          },
        ];
      }
    }

    return {
      style: mapCommonStyles(block.fields?.commonStyles),
      columns,
      numberOfItemOnDesktop: block.fields?.numberOfItemOnDesktop,
      numberOfItemOnMobile: block.fields?.numberOfItemOnMobile,
      rowWidthOptionDesktop: block.fields?.rowWidthOptionDesktop?.[0]?.value,
      rowWidthOptionMobile: block.fields?.rowWidthOptionMobile?.[0]?.value,
      backgroundColorHex: block.fields?.backgroundColorHex,
      backgroundColorOpacity: block.fields?.backgroundColorOpacity,
      contentSpaceX: block.fields?.contentSpaceX?.[0]?.value,
      contentSpaceY: block.fields?.contentSpaceY?.[0]?.value,
      contentSpaceXDesktop: block.fields?.contentSpaceXDesktop?.[0]?.value,
      contentSpaceYDesktop: block.fields?.contentSpaceYDesktop?.[0]?.value,
      height: block.fields?.blockHeight,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new RowBlockTransformer());
