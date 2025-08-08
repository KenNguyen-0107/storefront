import { SectionData, RowData } from "@/packages/composable-content-engine/types/renderPayload";
import { LitiumBaseBlockTransformer } from "@/packages/litium-cms-adapter/src/transformers/base/litiumBaseBlockTransformer";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";
import { RowBlock, ContentBlock, SectionBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";

const CMS_BLOCK_TYPE = "SectionBlock";

export class SectionBlockTransformer extends LitiumBaseBlockTransformer<SectionBlock, SectionData> {
  type = CMS_BLOCK_TYPE;

  transform(block: SectionBlock): SectionData {
    let rows: RowData[] = [];

    if (block.children && block.children.length > 0) {
      const allAreRowBlocks = block.children.every((child) => child.__typename === "RowBlock");

      if (allAreRowBlocks) {
        // Use the transformer system for RowBlock
        rows = (block.children as RowBlock[]).map((row: RowBlock) => {
          const transformedRow = transformBlocks([row], this.transformers as any)[0] as RowData;
          return transformedRow;
        });
      } else {
        rows = [
          {
            columns: [
              {
                blocks: transformBlocks(block.children as ContentBlock[], this.transformers as any),
              },
            ],
          },
        ];
      }
    }

    return {
      rows,
      backgroundColorHex: block.fields?.backgroundColorHex,
      paddingX: block.fields?.paddingX?.[0]?.value,
      paddingY: block.fields?.paddingY?.[0]?.value,
      paddingXDesktop: block.fields?.paddingXDesktop?.[0]?.value,
      paddingYDesktop: block.fields?.paddingYDesktop?.[0]?.value,
    };
  }
}

LitiumTransformerRegistry.register(CMS_BLOCK_TYPE, new SectionBlockTransformer());
