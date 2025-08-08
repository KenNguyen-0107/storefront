import type { RenderPayload, RowData, ColumnData, BlockData } from "../types/index";

// Interface for Litium CMS page data
interface LitiumPageData {
  id: string;
  name: string;
  url: string;
  templateName?: string;
  metadata?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  fields?: Record<string, any>;
  blocks?: {
    [area: string]: LitiumBlock[];
  };
}

// Interface for Litium CMS block data
interface LitiumBlock {
  __typename: string;
  id: string;
  blockType: string;
  title?: string;
  content?: string;
  image?: {
    url: string;
    alt?: string;
  };
  caption?: string;
}

/**
 * Content adapter for transforming Litium CMS data to RenderPayload format
 */
export class LitiumContentAdapter {
  /**
   * Transform Litium page data to RenderPayload
   */
  transform(litiumData: LitiumPageData): RenderPayload {
    if (!litiumData) {
      throw new Error("Litium data is required for transformation");
    }

    const renderPayload: RenderPayload = {
      id: litiumData.id,
      name: litiumData.name || "Untitled Page",
      url: litiumData.url,
      metadata: {
        title: litiumData.metadata?.title || litiumData.name || "Untitled Page",
        description: litiumData.metadata?.description || "",
        keywords: litiumData.metadata?.keywords || "",
      },
      templateName: litiumData.templateName || "default",
      fields: litiumData.fields || {},
      rows: this.transformBlocksToRows(litiumData.blocks || {}),
    };

    return renderPayload;
  }

  /**
   * Transform Litium blocks organized by content areas to RenderPayload rows
   */
  private transformBlocksToRows(blockAreas: Record<string, LitiumBlock[]>): RowData[] {
    const rows: RowData[] = [];

    // Process each content area (header, main, content, top, etc.)
    Object.entries(blockAreas).forEach(([areaName, blocks]) => {
      if (blocks && blocks.length > 0) {
        const row: RowData = {
          id: `${areaName}-row`,
          name: `${areaName} Content Area`,
          templateName: areaName,
          columns: [
            {
              id: `${areaName}-column`,
              name: `${areaName} Column`,
              templateName: "single-column",
              width: 12, // Full width
              blocks: blocks.map((block, index) => this.transformBlock(block, areaName, index)),
            },
          ],
        };

        rows.push(row);
      }
    });

    // If no blocks are present, create a default row with fallback content
    if (rows.length === 0) {
      rows.push(this.createFallbackRow());
    }

    return rows;
  }

  /**
   * Transform individual Litium block to RenderPayload BlockData
   */
  private transformBlock(litiumBlock: LitiumBlock, areaName: string, index: number): BlockData {
    const baseBlock = {
      id: litiumBlock.id || `${areaName}-block-${index}`,
      name: litiumBlock.title || `${litiumBlock.blockType} Block`,
      templateName: this.mapBlockTypeToTemplate(litiumBlock.blockType),
      type: this.mapBlockTypeToRenderType(litiumBlock.blockType),
    };

    // Transform based on block type
    switch (litiumBlock.blockType) {
      case "TextBlock":
        return {
          ...baseBlock,
          content: {
            title: litiumBlock.title || "",
            text: litiumBlock.content || "",
          },
        };

      case "ImageBlock":
        return {
          ...baseBlock,
          content: {
            image: {
              url: litiumBlock.image?.url || "",
              alt: litiumBlock.image?.alt || litiumBlock.caption || "",
            },
            caption: litiumBlock.caption || "",
          },
        };

      default:
        // Generic block transformation
        return {
          ...baseBlock,
          content: {
            ...litiumBlock,
            __typename: litiumBlock.__typename,
            blockType: litiumBlock.blockType,
          },
        };
    }
  }

  /**
   * Map Litium block types to render templates
   */
  private mapBlockTypeToTemplate(blockType: string): string {
    const templateMap: Record<string, string> = {
      TextBlock: "text-block",
      ImageBlock: "image-block",
      VideoBlock: "video-block",
      ButtonBlock: "button-block",
      HeroBlock: "hero-block",
      // Add more mappings as needed
    };

    return templateMap[blockType] || "generic-block";
  }

  /**
   * Map Litium block types to render types
   */
  private mapBlockTypeToRenderType(blockType: string): string {
    const typeMap: Record<string, string> = {
      TextBlock: "text",
      ImageBlock: "image",
      VideoBlock: "video",
      ButtonBlock: "button",
      HeroBlock: "hero",
      // Add more mappings as needed
    };

    return typeMap[blockType] || "generic";
  }

  /**
   * Create a fallback row when no content blocks are available
   */
  private createFallbackRow(): RowData {
    return {
      id: "fallback-row",
      name: "Default Content",
      templateName: "fallback",
      columns: [
        {
          id: "fallback-column",
          name: "Default Column",
          templateName: "single-column",
          width: 12,
          blocks: [
            {
              id: "fallback-block",
              name: "Default Content Block",
              templateName: "text-block",
              type: "text",
              content: {
                title: "Welcome",
                text: "This page is currently being configured. Content will be available soon.",
              },
            },
          ],
        },
      ],
    };
  }
}

/**
 * Factory function to create LitiumContentAdapter instance
 */
export function createLitiumContentAdapter(): LitiumContentAdapter {
  return new LitiumContentAdapter();
}
