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
import { LitiumParser } from "@/packages/litium-cms-adapter/src/parser/LitiumParser";
import { LitiumTransformerRegistry } from "@/packages/litium-cms-adapter/src/transformers/TransformerRegistry";
import { transformBlocks } from "@/packages/litium-cms-adapter/src/utils/transformBlocks";
import { SectionBlock } from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { ITopHeader } from "../niteco-ui/components/types/cms/ITopHeader";
import { INavigation, INavigationItem } from "../niteco-ui/components/types/cms/INavigation";
import { IFooter } from "../niteco-ui/components/types/cms/IFooter";
import { ISetting } from "../niteco-ui/components/types/cms/ISetting";
import "./src/transformers/blocks";

export class LitiumAdapter extends BaseAdapter {
  name = "litium";

  constructor(config: any) {
    const parser: IParser = new LitiumParser();
    super(parser, LitiumTransformerRegistry.getAll(), config);
  }

  async getPageData(jsonDataInput: any): Promise<RenderPayload> {
    const content = jsonDataInput.content;
    const pageId = content?.id || "";
    const title = content?.metadata?.title || content?.name || "";

    const meta = this.extractMetadata(content);
    const mainBlocks = this.parser.parseBlocks(jsonDataInput);
    const sections: SectionData[] = mainBlocks.map((section: SectionBlock) => {
      return transformBlocks([section], this.transformers as any)[0] as SectionData;
    });
    const result = {
      pageId,
      title,
      meta,
      sections,
    };
    return result;
  }

  async getHeaderData(jsonDataInput: any): Promise<RenderHeaderPayload> {
    // Parse top header blocks
    const topHeaderBlocks = this.parser.parseTopHeaderBlocks(jsonDataInput);
    const topHeader: ITopHeader = {
      richDescription: topHeaderBlocks[0]?.fields?.richDescription?.[0]?.value || "",
      rows: transformBlocks(topHeaderBlocks[0]?.children || [], this.transformers as any) as RowData[],
    };

    // Parse main navigation from mainMenu
    const mainNavigationBlocks = this.parser.parseNavigationBlocks(jsonDataInput);
    const mainNavigation: INavigation = {
      layout: {
        layoutDesktop: mainNavigationBlocks[0]?.fields?.layoutDesktop?.[0]?.value || "horizontal",
        layoutMobile: mainNavigationBlocks[0]?.fields?.layoutMobile?.[0]?.value || "vertical",
        layoutTablet: mainNavigationBlocks[0]?.fields?.layoutTablet?.[0]?.value || "horizontal",
      },
      items: transformBlocks(mainNavigationBlocks[0]?.children || [], this.transformers as any) as INavigationItem[],
    };

    return { topHeader, mainNavigation };
  }

  async getFooterData(jsonDataInput: any): Promise<RenderFooterPayload> {
    // Parse footer blocks using the existing parser
    const footerBlocks = this.parser.parseFooterBlocks(jsonDataInput);

    const footer: IFooter = {
      rows: transformBlocks(footerBlocks[0]?.children || [], this.transformers as any) as RowData[],
    };
    console.log("footer", footer);
    return { footer };
  }

  async getSettingData(jsonDataInput: any): Promise<RenderSettingPayload> {
    const website = this.parser.parseSetting(jsonDataInput);
    const websiteTexts = this.extractWebsiteTexts(jsonDataInput);

    // Transform the website data into ISetting format
    const setting: ISetting = {
      companyAddress: {
        phoneNumber: website?.fields?.companyAddress?.[0]?.phoneNumber || "",
      },
      logo: {
        title: website?.fields?.logotypeMain?.item?.filename || "",
        href: "/",
        src: website?.fields?.logotypeMain?.item?.url || "",
        width: website?.fields?.logotypeMain?.item?.dimension?.width || 0,
        height: website?.fields?.logotypeMain?.item?.dimension?.height || 0,
        alt: website?.fields?.logotypeMain?.item?.alt || "",
      },
      account: {
        greeting: websiteTexts.greetingText,
        guestText: websiteTexts.guestText,
        accountText: websiteTexts.myAccount,
        links:
          website?.fields?.loginPage?.map((page: any) => ({
            text: websiteTexts.loginorregister,
            href: page?.item?.url || "/login",
          })) || [],
      },
      cart: {
        title: websiteTexts.cart || "Cart",
        href: "/cart",
      },
      search: {
        ariaLabel: websiteTexts.seachplaceholder,
        title: websiteTexts.seachplaceholder,
        iconSrc: "/icons/search.svg",
      },
    };

    return { setting };
  }

  private getMetaTagContent(tags: any[], name: string): string | undefined {
    return tags?.find((tag: any) => tag.name === name)?.content;
  }

  private extractMetadata(content: any): any {
    return {
      title: content?.metadata?.title,
      description: this.getMetaTagContent(content?.metadata?.tags, "description"),
      ogDescription: this.getMetaTagContent(content?.metadata?.tags, "og:description"),
      ogTitle: this.getMetaTagContent(content?.metadata?.tags, "og:title"),
      ogType: this.getMetaTagContent(content?.metadata?.tags, "og:type"),
      ogLocale: this.getMetaTagContent(content?.metadata?.tags, "og:locale"),
      ogUrl: this.getMetaTagContent(content?.metadata?.tags, "og:url"),
      robots: this.getMetaTagContent(content?.metadata?.tags, "robots"),
      language: content?.metadata?.language,
    };
  }

  /**
   * Extract all website texts from the JSON data
   * @param jsonDataInput - The JSON data containing website information
   * @returns A record of text keys and their values
   */
  public extractWebsiteTexts(jsonDataInput: any): Record<string, string> {
    const texts = jsonDataInput?.channel?.website?.texts || [];
    const textMap: Record<string, string> = {};

    texts.forEach((text: { key: string; value: string }) => {
      if (text?.key && text?.value) {
        textMap[text.key] = text.value;
      }
    });

    return textMap;
  }

  public getWebsiteText(jsonDataInput: any, key: string, defaultValue: string = ""): string {
    const texts = this.extractWebsiteTexts(jsonDataInput);
    return texts[key] || defaultValue;
  }
}
