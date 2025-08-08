interface ImageUrl {
  base: string | null;
  default: string | null;
}

interface ImageData {
  key: string;
  url: ImageUrl;
}

type LayoutSetting = {
  key: string;
  value: string;
};

interface ImageTextItemElementProps {
  Heading: { html: string };
  RichText: { html: string };
  Image: ImageData;
  ImageMobile: ImageData;
  Alt: string;
  IsFullWidthImage: boolean;
  Loading: "lazy" | "eager";
  BackgroundLink: ImageUrl;
  ButtonLink: ImageUrl;
  ButtonText: string;
  ContentImagePosition: string;
  CssClass?: string;
}

export type { ImageTextItemElementProps, ImageUrl, ImageData, LayoutSetting };
