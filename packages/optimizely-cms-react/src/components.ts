/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */

import { RichText as BaseRichText } from "./components/rich-text/index";
import { serverContextAware } from "./rsc";
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been
 *             deprecated, use either `@niteco/optimizely-cms-react` or
 *             `@niteco/optimizely-cms-react/rsc`, dependingn on your context
 */
export const RichText = serverContextAware(BaseRichText);
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */
export { DefaultComponents, DefaultTextNode, createHtmlComponent } from "./components/rich-text/components";
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */
export * as Utils from "./components/rich-text/utils";
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */
export type * from "./components/rich-text/types";
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */
export type {
  BaseStyleDefinition,
  ElementStyleDefinition,
  LayoutProps,
  LayoutPropsSetting,
  LayoutPropsSettingChoices,
  LayoutPropsSettingKeys,
  LayoutPropsSettingValues,
  NodeStyleDefinition,
  StyleDefinition,
  StyleSetting,
} from "./components/cms-styles/index";
/**
 * @deprecated The `@niteco/optimizely-cms-react/components` export has been deprecated
 */
export { extractSettings, readSetting } from "./components/cms-styles/index";
