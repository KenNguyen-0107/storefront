// Commerce Components Dictionary
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

import commerceComponentDictionary from "./component";

// Apply Component/ prefix to maintain compatibility with CMS configuration
// Existing components that were in cms/component need this prefix
prefixDictionaryEntries(commerceComponentDictionary, "Component");

// Build dictionary
export const CommerceFactory: ComponentTypeDictionary = [
  ...commerceComponentDictionary,
];

// Export dictionary
export default CommerceFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string): ComponentTypeDictionary {
  list.forEach((component, idx, dictionary) => {
    dictionary[idx].type =
      typeof component.type == "string" ? prefix + "/" + component.type : [prefix, ...component.type];
  });
  return list;
}
