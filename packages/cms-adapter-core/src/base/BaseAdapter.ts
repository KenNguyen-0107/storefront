import { IAdapter } from "../interfaces/IAdapter";
import { IParser } from "../interfaces/IParser";
import { IBlockTransformer } from "../interfaces/IBlockTransformer";
import {
  RenderPayload,
  RenderHeaderPayload,
  RenderFooterPayload,
  RenderSettingPayload,
} from "@/packages/composable-content-engine/types/renderPayload";

export abstract class BaseAdapter implements IAdapter {
  abstract name: string;
  protected parser: IParser;
  protected transformers: Map<string, IBlockTransformer>;
  protected config: any;

  constructor(parser: IParser, transformers: Map<string, IBlockTransformer>, config: any) {
    this.parser = parser;
    this.transformers = transformers;
    this.config = config;
  }

  async getPageData(jsonDataInput: any): Promise<RenderPayload> {
    // This should be implemented by each adapter to process the input JSON
    throw new Error("getPageData must be implemented by the adapter");
  }

  async getHeaderData(jsonDataInput: any): Promise<RenderHeaderPayload> {
    // This should be implemented by each adapter to process the header JSON
    throw new Error("getHeaderData must be implemented by the adapter");
  }

  async getFooterData(jsonDataInput: any): Promise<RenderFooterPayload> {
    // This should be implemented by each adapter to process the footer JSON
    throw new Error("getFooterData must be implemented by the adapter");
  }

  async getSettingData(jsonDataInput: any): Promise<RenderSettingPayload> {
    // This should be implemented by each adapter to process the setting JSON
    throw new Error("getSettingData must be implemented by the adapter");
  }
}
