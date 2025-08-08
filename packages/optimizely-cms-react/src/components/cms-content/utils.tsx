import { type ComponentType } from "react";
import { type CmsContentComponent, type PropsWithCmsContent } from "./types";

export function cmsContentAware<P = object>(
  component: ComponentType<PropsWithCmsContent<P>>,
  cmsContentComponent: CmsContentComponent
): ComponentType<P> {
  const BaseComponent = component;
  const WrappedComponent = (props: P) => <BaseComponent cmsContent={cmsContentComponent} {...props} />;
  WrappedComponent.displayName = `cmsContentAware(${BaseComponent.displayName || BaseComponent.name || "Component"})`;
  return WrappedComponent;
}
