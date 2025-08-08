// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";

import NodeComponent from "./node";
import ExperienceFactory from "./experience";
import nodesDictionary from "./nodes";
// import elementDictionary from "./element";
import componentDictionary from "./component";
// import blockDictionary from "./block";

prefixDictionaryEntries(ExperienceFactory, "Experience");
prefixDictionaryEntries(ExperienceFactory, "Page");
prefixDictionaryEntries(nodesDictionary, "Nodes");
// prefixDictionaryEntries(elementDictionary, "Element");
prefixDictionaryEntries(componentDictionary, "Component");
// prefixDictionaryEntries(blockDictionary, "Block");

// Build dictionary
export const CmsFactory: ComponentTypeDictionary = [
  {
    type: "Node",
    component: NodeComponent,
  },

  ...ExperienceFactory,
  ...nodesDictionary,
  // ...blockDictionary,
  // ...elementDictionary,
  ...componentDictionary,
];

// Export dictionary
export default CmsFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string): ComponentTypeDictionary {
  list.forEach((component, idx, dictionary) => {
    dictionary[idx].type =
      typeof component.type == "string" ? prefix + "/" + component.type : [prefix, ...component.type];
  });
  return list;
}
