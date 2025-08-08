"use client";

import { type ComponentType } from "react";
import { useOptimizelyCms } from "../context/client";
import { type PropsWithContext } from "../context/types";
import { cmsContentAware } from "./cms-content/utils";

import { CmsContentArea as BaseContentArea, type CmsContentAreaComponent } from "./cms-content-area/index"; // Both RSC & Client capable
import { CmsEditable as BaseEditable, type CmsEditableComponent } from "./cms-editable/index"; // Both RSC & Client capable
import { CmsContent as BaseCmsContent, type CmsContentComponent } from "./cms-content/client"; // Different components for RSC & Client
import {
  OptimizelyComposition as BaseOptimizelyComposition,
  type OptimizelyCompositionComponent,
} from "./visual-builder/index"; // Both RSC & Client capable
import { RichText as BaseRichText, type RichTextComponent } from "./rich-text/index";

// Pass through Style functions types
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
} from "./cms-styles/index";
export {
  isNode,
  isElementNode,
  isComponentNode,
  isComponentNodeOfType,
  isStructureNode,
} from "./visual-builder/functions";
export { extractSettings, readSetting } from "./cms-styles/index";

/**
 * Client side renderer for Rich Text
 */
export const RichText = clientContextAware(BaseRichText) as RichTextComponent;
export type {
  RichTextComponent,
  RichTextProps,
  RichTextNode,
  StringNode,
  TypedNode,
  NodeInput,
} from "./rich-text/index";
export { DefaultComponents as RichTextComponentDictionary, createHtmlComponent } from "./rich-text/components";
export { isNodeInput, isNonEmptyString, isRichTextNode, isStringNode, isText, isTypedNode } from "./rich-text/utils";

/**
 * Wrapper function to turn context dependant components into easy to use
 * client components
 *
 * @param       component       The component where the `ctx` parameter must be fulfilled
 * @returns     The component, without CTX parameter
 */
export function clientContextAware<P = any>(component: ComponentType<PropsWithContext<P>>): ComponentType<P> {
  const BaseComponent = component;
  const ClientContextInjector = (props: P) => {
    const ctx = useOptimizelyCms();
    return <BaseComponent ctx={ctx} {...props} />;
  };
  return ClientContextInjector;
}

/**
 * Client side Optimizely CMS Editable
 */
export const CmsEditable = clientContextAware(BaseEditable) as CmsEditableComponent;

/**
 * Client side Optimizely CMS Content, leveraging the CMS Context to load the
 * content type and content data when needed
 */
export const CmsContent = clientContextAware(BaseCmsContent) as CmsContentComponent;
export type { CmsContentComponent, CmsContentProps } from "./cms-content/client";

/**
 * Client side Optimizely CMS Content Area, leveraging the CMS Context to infer
 * the connection to Optimizely Graph and component dictionary.
 */
export const CmsContentArea = cmsContentAware(
  clientContextAware(BaseContentArea),
  CmsContent
) as CmsContentAreaComponent;
export type {
  CmsContentAreaClassMapper,
  CmsContentAreaComponent,
  CmsContentAreaProps,
  ContentAreaItemDefinition,
} from "./cms-content-area/index";

/**
 * Client side Optimizely Composition (e.g. Visual Builder), leveraging the CMS
 * Context to infer the connection to Optimizely Graph and component
 * dictionary.
 */
export const OptimizelyComposition = cmsContentAware(
  clientContextAware(BaseOptimizelyComposition),
  CmsContent
) as OptimizelyCompositionComponent;
