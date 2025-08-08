import { IButton } from "./IButton";
import { IImage } from "./IImage";
import { IText } from "./IText";
import { BlockData } from "../../../../composable-content-engine/types/renderPayload";
import { ILink } from "./ILink";
export interface ITextImage extends BlockData {
  loading?: string;
  image?: IImage;
  text?: IText;
  button?: IButton[];
  backgroundColorHex?: string;
  backgroundColorOpacity?: string;
  backgroundLink?: ILink;
  contentImagePosition?: string;
  [x: string]: any;
}
