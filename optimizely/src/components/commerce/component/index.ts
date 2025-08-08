// Commerce Components Dictionary
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import ProductCardListElementComponent from "./ProductCardListElement";
import ProductCarouselElementComponent from "./ProductCarouselElement";
import PDPSpecificationsElementComponent from "./PDPSpecificationsElement";

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
