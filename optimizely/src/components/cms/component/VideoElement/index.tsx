import type { CmsComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import {
  VideoElementDataFragmentDoc,
  type VideoElementDataFragment,
} from "@/gql/graphql";
import { CustomVideo } from "@/packages/niteco-ui/components/atoms/CustomVideo";
import { getComponentSettingsClass, ILayoutSettings } from "@/utils";
import clsx from "clsx";

export const VideoElementComponent: CmsComponent<VideoElementDataFragment> = ({
  data,
  layoutProps,
  contentLink,
  ctx,
}) => {
  const settings = extractSettings({
    type: "",
    layoutType: "",
    template: "",
    settings: (layoutProps as any)?.settings || {},
  });
  const containerClasses = clsx(
    "video-element",
    getComponentSettingsClass(settings as ILayoutSettings),
  );
  const videoUrl = data?.VideoUrl || (data?.Video as any)?.url?.default || "";
  const placeholderUrl = (data?.Placeholder as any)?.url?.default;

  if (!videoUrl) return null;
  return (
    <CmsEditable
      cmsId={contentLink?.key}
      cmsFieldName="VideoUrl"
      editType="floating"
      ctx={ctx}
      as={CustomVideo}
      videoUrl={videoUrl}
      backgroundImageUrl={placeholderUrl}
      loading={data?.Loading as "lazy" | "eager" | undefined}
      className={containerClasses}
      autoplayAsBool={(data?.Autoplay as boolean) || false}
      playOnPopup={(data?.PlayOnPopup as boolean) || false}
    />
  );
};
VideoElementComponent.displayName = "Video Element (Component/VideoElement)";
VideoElementComponent.getDataFragment = () => [
  "VideoElementData",
  VideoElementDataFragmentDoc,
];

export default VideoElementComponent;
