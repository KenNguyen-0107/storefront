import { BaseAdapter } from "@/packages/cms-adapter-core/src/base/BaseAdapter";
import { IParser } from "@/packages/cms-adapter-core/src/interfaces/IParser";
import {
  RenderPayload,
  SectionData,
  RowData,
  RenderHeaderPayload,
  RenderFooterPayload,
  RenderSettingPayload,
} from "@/packages/composable-content-engine/types/renderPayload";
import { ConfigureCommerceParser } from "./src/parser/configureCommerceParser";
import { ConfigureCommerceTransformerRegistry } from "./src/transformers/transformerRegistry";
import { transformBlocks } from "./src/utils/transformBlocks";
import { WidgetBlock } from "./src/parser/blocks.types";
import { ITopHeader } from "../niteco-ui/components/types/cms/ITopHeader";
import { INavigation } from "../niteco-ui/components/types/cms/INavigation";
import { IFooter } from "../niteco-ui/components/types/cms/IFooter";
import { ISetting } from "../niteco-ui/components/types/cms/ISetting";
import { ADAPTER_NAME, LAYOUT } from "./src/constants";
import "./src/transformers/blocks";

export class OptimizelyConfigureCommerceAdapter extends BaseAdapter {
  name = ADAPTER_NAME;

  constructor(config: any) {
    const parser: IParser = new ConfigureCommerceParser();
    super(parser, ConfigureCommerceTransformerRegistry.getAll(), config);
  }

  async getPageData(jsonDataInput: any): Promise<RenderPayload> {
    // Extract page information from the first item in the data
    const pageData = this.extractPageData(jsonDataInput);
    const pageId = pageData?.Id || "";
    const title = pageData?.Title || pageData?.Name || "";

    const meta = this.extractMetadata(pageData);
    const mainBlocks = this.parser.parseBlocks(jsonDataInput);

    // Transform each row block into its own section
    const sections: SectionData[] = mainBlocks.map((rowBlock: WidgetBlock) => {
      const rowData = transformBlocks([rowBlock], this.transformers as any)[0] as RowData;
      return {
        rows: [rowData],
      };
    });

    console.log("sections", sections);
    const result = {
      pageId,
      title,
      meta,
      sections,
    };
    return result;
  }

  async getHeaderData(jsonDataInput: any): Promise<RenderHeaderPayload> {
    // For now, return empty header data - this can be extended based on requirements
    const topHeader: ITopHeader = {
      richDescription: "",
      rows: [],
    };

    const mainNavigation: INavigation = {
      layout: {
        layoutDesktop: LAYOUT.Horizontal,
        layoutMobile: LAYOUT.Vertical,
        layoutTablet: LAYOUT.Horizontal,
      },
      items: [],
    };

    return { topHeader, mainNavigation };
  }

  async getFooterData(jsonDataInput: any): Promise<RenderFooterPayload> {
    // For now, return empty footer data - this can be extended based on requirements
    const footer: IFooter = {
      rows: [],
    };
    return { footer };
  }

  async getSettingData(jsonDataInput: any): Promise<RenderSettingPayload> {
    // For now, return empty setting data - this can be extended based on requirements
    const setting: ISetting = {
      companyAddress: {
        phoneNumber: "",
      },
      logo: {
        title: "",
        href: "/",
        src: "",
        width: 0,
        height: 0,
        alt: "",
      },
      account: {
        greeting: "",
        guestText: "",
        accountText: "",
        links: [],
      },
      cart: {
        title: "Cart",
        href: "/cart",
      },
      search: {
        ariaLabel: "Search",
        title: "Search",
        iconSrc: "/icons/search.svg",
      },
    };

    return { setting };
  }

  private extractPageData(data: any): any {
    // Find the first page type that has items
    const pageTypes = Object.keys(data);
    for (const pageType of pageTypes) {
      const pageItems = data[pageType]?.items;
      if (pageItems && Array.isArray(pageItems) && pageItems.length > 0) {
        return pageItems[0];
      }
    }
    return null;
  }

  private extractMetadata(pageData: any): any {
    return {
      title: pageData?.Title || pageData?.Name,
      description: pageData?.MetaDescription,
      keywords: pageData?.MetaKeywords,
      ogTitle: pageData?.Title || pageData?.Name,
      ogUrl: pageData?.Url,
      language: pageData?.Languages?.[0]?.LanguageCode,
    };
  }
}
