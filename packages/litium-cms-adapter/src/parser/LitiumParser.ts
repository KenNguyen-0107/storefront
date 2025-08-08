import { IParser } from "@/packages/cms-adapter-core/src/interfaces/IParser";
import {
  SectionBlock,
  FooterContainer,
  TopHeaderContainer,
  NavigationContainer,
} from "@/packages/litium-cms-adapter/src/parser/blocks.types";
import { GetHomePageQuery, GetWebsiteQuery } from "@/generated/graphql";

export class LitiumParser implements IParser {
  parseBlocks(jsonDataInput: GetHomePageQuery): SectionBlock[] {
    const blocks =
      (jsonDataInput?.content && "blocks" in jsonDataInput.content && jsonDataInput.content.blocks?.main) || [];
    return blocks.map((block: any) => ({
      ...block,
    }));
  }

  parsePageMetadata(jsonDataInput: GetHomePageQuery): Record<string, any> {
    const content =
      jsonDataInput?.content && "metadata" in jsonDataInput.content
        ? (jsonDataInput.content as { metadata: any }).metadata
        : undefined;
    return {
      ...content?.fields,
      id: content?.id,
      url: content?.url,
      name: content?.name,
      __typename: content?.__typename,
    };
  }

  parseTopHeaderBlocks(jsonDataInput: GetWebsiteQuery): TopHeaderContainer {
    const topHeaderBlocks = jsonDataInput.channel?.website?.blocks?.topHeader || [];
    return topHeaderBlocks.filter((block): block is NonNullable<typeof block> => block !== null) as TopHeaderContainer;
  }

  parseNavigationBlocks(jsonDataInput: GetWebsiteQuery): NavigationContainer {
    const mainMenu = jsonDataInput.channel?.website?.blocks?.mainMenu || [];
    return mainMenu.filter((block): block is NonNullable<typeof block> => block !== null) as NavigationContainer;
  }

  parseFooterBlocks(jsonDataInput: GetWebsiteQuery): FooterContainer {
    const footer = jsonDataInput.channel?.website?.blocks?.footer || [];
    return footer.filter((block): block is NonNullable<typeof block> => block !== null) as FooterContainer;
  }

  parseSetting(jsonDataInput: GetWebsiteQuery): Record<string, any> {
    return jsonDataInput.channel?.website || {};
  }
}
