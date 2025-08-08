import { IAdapter } from "@/packages/cms-adapter-core/src/interfaces/IAdapter";
import {
  RenderHeaderPayload,
  RenderPayload,
  RenderSettingPayload,
} from "@/packages/composable-content-engine/types/renderPayload";
import { RenderFooterPayload } from "@/packages/composable-content-engine/types/renderPayload";

export class OptimizelyAdapter implements IAdapter {
  name = "optimizely";

  getPageData(jsonDataInput: any): Promise<RenderPayload> {
    return Promise.resolve({
      pageId: jsonDataInput.pageId,
      title: jsonDataInput.title,
      sections: jsonDataInput.sections,
    });
  }
  getHeaderData(jsonDataInput: any): Promise<RenderHeaderPayload> {
    return Promise.resolve({
      topHeader: jsonDataInput.topHeader,
      mainNavigation: jsonDataInput.mainNavigation,
    });
  }
  getFooterData(jsonDataInput: any): Promise<RenderFooterPayload> {
    return Promise.resolve({
      footer: jsonDataInput.footer,
    });
  }
  getSettingData(jsonDataInput: any): Promise<RenderSettingPayload> {
    return Promise.resolve({
      setting: jsonDataInput.setting,
    });
  }
}
