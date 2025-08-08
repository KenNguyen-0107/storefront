import { BlockData } from "../../../../composable-content-engine/types/renderPayload";

export interface IText extends BlockData {
  content?: string;
  backgroundColor?: string;
  cssClass?: string;
  [x: string]: any;
}
