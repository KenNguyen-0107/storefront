export interface IParser {
  parseBlocks(jsonDataInput: any): any[];
  parseTopHeaderBlocks(jsonDataInput: any): any[];
  parseNavigationBlocks(jsonDataInput: any): any[];
  parseFooterBlocks(jsonDataInput: any): any[];
  parsePageMetadata(jsonDataInput: any): Record<string, any>;
  parseSetting(jsonDataInput: any): Record<string, any>;
}
