export interface BasicBannerProps {
  Type?: string;
  Id?: string;
  Background?: string;
  BackgroundColor?: string;
  BackgroundImage?: string;
  Heading?: string;
  Subheading?: string;
  Description?: string;
  BlockHeight?: string;
  BackgroundOverlay?: string;
  ButtonLabel?: string;
  ButtonLink?: string;
  BackgroundLink?: string;
  Loading?: string;
  CssClass?: string;
  props?: {
    [x: string]: any;
  };
}
