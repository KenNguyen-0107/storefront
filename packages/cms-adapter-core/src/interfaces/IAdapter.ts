import {
  RenderPayload,
  RenderHeaderPayload,
  RenderFooterPayload,
  RenderSettingPayload,
} from "@/packages/composable-content-engine/types/renderPayload";

export interface IAdapter {
  name: string;
  getPageData(jsonDataInput: any): Promise<RenderPayload>;
  getHeaderData(jsonDataInput: any): Promise<RenderHeaderPayload>;
  getFooterData(jsonDataInput: any): Promise<RenderFooterPayload>;
  getSettingData(jsonDataInput: any): Promise<RenderSettingPayload>;
}
