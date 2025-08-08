// Commerce Components Dictionary
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import ProductCardListElementComponent from "./ProductCardListElement";
import ProductCarouselElementComponent from "./ProductCarouselElement";
import PDPSpecificationsElementComponent from "./PDPSpecificationsElement";
import PDPCarouselElementComponent from "./PDPCarouselElement";

// Build commerce components dictionary
export const CommerceComponentFactory: ComponentTypeDictionary = [
  {
    type: "ProductCardListElement",
    component: ProductCardListElementComponent,
  },
  {
    type: "ProductCarouselElement",
    component: ProductCarouselElementComponent,
  },
  {
    type: "PDPSpecificationsElement",
    component: PDPSpecificationsElementComponent,
  },
  {
    type: "PDPCarouselElement",
    component: PDPCarouselElementComponent,
  },
];

// Export dictionary
export default CommerceComponentFactory;

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
