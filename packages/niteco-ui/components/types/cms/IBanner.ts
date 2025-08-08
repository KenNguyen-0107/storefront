import { IButton } from "./IButton";
import { IImage } from "./IImage";
import { ILink } from "./ILink";
import { IText } from "./IText";
import React, { ReactNode } from "react";

export interface IBanner {
  type?: string;
  image?: IImage;
  heading?: React.JSX.Element | string;
  subHeading?: React.JSX.Element | string;
  text?: IText;
  backgroundColorOverlay?: string;
  backgroundColorOverlayOpacity?: string;
  button?: IButton[];
  backgroundLink?: ILink;
  loading?: string;
  blockHeight?: string;
  contentClassName?: string;
  [key: string]: any;
}
