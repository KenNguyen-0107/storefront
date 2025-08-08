import React from "react";
import { CmsComponent, type LayoutProps } from "@remkoj/optimizely-cms-react";
import type { ImageItemElement as ImageItemElementType } from "@/gql/graphql";
import { getComponentSettingsClass, ILayoutSettings } from "@/utils";
import ImageItem from "@/packages/niteco-ui/components/atoms/image/ImageItem";
import clsx from "clsx";

import NextImage from "next/image";
import {
  extractSettings,
  CmsEditable,
  CmsComponentProps,
  WithGqlFragment,
} from "@remkoj/optimizely-cms-react/rsc";

type ImageItemElementComponent = CmsComponent<ImageItemElementType> &
  WithGqlFragment<any, ImageItemElementType>;

const ImageItemElement: ImageItemElementComponent = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}: CmsComponentProps<ImageItemElementType, LayoutProps<any>>) => {
  if (!data.ImageDesktop?.url?.default && !data.ImageMobile?.url?.default) {
    return null;
  }
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });

  const containerClasses = clsx(
    getComponentSettingsClass(settings as ILayoutSettings),
  );

  return (
    <CmsEditable
      as={ImageItem}
      cmsId={contentLink?.key}
      cmsFieldName="ImageDesktop"
      editType="floating"
      ctx={ctx}
      src={data.ImageDesktop?.url?.default || ""}
      srcMobile={data.ImageMobile?.url?.default || ""}
      alt={data.Alt || ""}
      className={containerClasses}
      isBackground={data.IsBackground}
      isFullWidth={data.IsFullWidthImage}
      overlayColor={data.OverlayColor}
      overlayOpacity={data.OverlayOpacity}
      isAspectRatio={settings.aspectRatio !== "default"}
      loading={(data.Loading as "lazy" | "eager") || "lazy"}
    />
  );
};

export default ImageItemElement;
