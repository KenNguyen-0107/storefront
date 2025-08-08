// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import BannerItemElement from "./BannerItemElement";
import ContentTextElement from "./ContentTextElement";
import ImageItemElement from "./ImageItemElement";
import ButtonElement from "./ButtonElement";
import ImageTextItemElement from "./ImageTextItemElement";
import HeadingElement from "./HeadingElement";
import ParagraphElement from "./ParagraphElement";
import ExpandableTextElement from "./ExpandableText";
import VideoElement from "./VideoElement";
import WebHeaderConfigrationBlock from "./WebHeaderConfigrationBlock";
import WebFooterConfigrationBlock from "./WebFooterConfigrationBlock";
import FAQsSection from "./FAQsSection";
// import ContainerElement from "./ContainerElement";
// import ComponentPageFactory from "./Page";

// Prefix entries - if needed
// prefixDictionaryEntries(ComponentPageFactory, "Page");

// Build dictionary
export const ComponentFactory: ComponentTypeDictionary = [
  {
    type: "BannerItemElement",
    component: BannerItemElement,
  },
  //   {
  //     type: "ContainerElement",
  //     component: ContainerElement,
  //   },
  {
    type: "ContentTextElement",
    component: ContentTextElement,
  },
  {
    type: "ImageItemElement",
    component: ImageItemElement,
  },
  {
    type: "ButtonElement",
    component: ButtonElement,
  },
  {
    type: "ImageTextItemElement",
    component: ImageTextItemElement,
  },
  {
    type: "HeadingElement",
    component: HeadingElement,
  },
  {
    type: "ParagraphElement",
    component: ParagraphElement,
  },
  {
    type: "ExpandableText",
    component: ExpandableTextElement,
  },
  {
    type: "VideoElement",
    component: VideoElement,
  },
  {
    type: "WebHeaderConfigrationBlock",
    component: WebHeaderConfigrationBlock,
  },
  {
    type: "WebFooterConfigrationBlock",
    component: WebFooterConfigrationBlock,
  },
  {
    type: "FAQsSection",
    component: FAQsSection,
  },
  //   ...ComponentPageFactory,
];

// Export dictionary
export default ComponentFactory;

// Helper functions
function prefixDictionaryEntries(
  list: ComponentTypeDictionary,
  prefix: string,
): ComponentTypeDictionary {
  list.forEach((component, idx, dictionary) => {
    dictionary[idx].type =
      typeof component.type == "string"
        ? prefix + "/" + component.type
        : [prefix, ...component.type];
  });
  return list;
}
