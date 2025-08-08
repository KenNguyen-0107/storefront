import { CodegenConfig } from "@graphql-codegen/cli";
import { type Types } from "@graphql-codegen/plugin-helpers";
import getSchemaInfo, { type SchemaInfo } from "../packages/optimizely-graph-client/src/codegen";
import getConfigureCommerceSchemaInfo, {
  type SchemaInfo as ConfigureCommerceSchemaInfo,
} from "../packages/optimizely-configure-commerce-graph-client/src/codegen";
import * as dotenv from "dotenv";
import GraphPreset from "./preset";
import { preset as OptimizelyGraphPreset } from "../packages/optimizely-graph-functions/src/preset";
import { type PresetOptions as OptimizelyGraphPresetOptions } from "../packages/optimizely-graph-functions/src/preset";

dotenv.config();

const CMS_TYPE = process.env.CMS_TYPE;

interface ProviderConfig {
  schema: string | SchemaInfo | ConfigureCommerceSchemaInfo;
  documents: string;
  preset: Types.OutputPreset<any>;
  presetConfig?: Types.PluginConfig;
}

const providerMap: Record<string, ProviderConfig> = {
  litium: {
    schema: process.env.LITIUM_SCHEMA_URL || "https://jacksonsfencing-litium-d-cl.niteco.dev/storefront.graphql/",
    documents: process.env.LITIUM_DOCUMENTS_GLOB || "packages/litium-graph-client/**/*.graphql",
    preset: GraphPreset,
    presetConfig: {
      skipSchemaValidation: true,
      skipDocumentsValidation: true,
    },
  },
  optimizely: {
    schema: getSchemaInfo(),
    documents: "packages/optimizely-graph-client/**/*.graphql",
    preset: OptimizelyGraphPreset,
    presetConfig: {
      verbose: true,
      // By default the preset will generate recursive queries
      // untill multiple recursions are supported, this needs to
      // be disabled when there's more then one component that
      // will use recursion
      recursion: true,

      // The GQL tag to be used to identify inline GraphQL queries
      gqlTagName: "gql",

      // Configure the fragments that will be spread into the utility
      // partial fragments. You can use any fragment here, however the
      // system is designed for the following receiving fragments:
      // - PageData => For all page-level components
      // - BlockData => For everyting that can be rendered as individual component
      // - ElementData => For all element types that are useable within Visual Builder
      injections: [
        {
          // Add from all Pages, within code
          into: "PageData",
          pathRegex: "optimizely/src/components/cms/page/.*.[tj]s(x){0,1}$",
        },
        {
          // Add from all Experiences, within code
          into: "PageData",
          pathRegex: "optimizely/src/components/cms/experience/.*.[tj]s(x){0,1}$",
        },
        {
          // Add from all Blocks, within code
          into: "BlockData",
          pathRegex: "optimizely/src/components/cms/component/.*.[tj]s(x){0,1}$",
        },
        {
          // Add from all Elements, within code
          into: "ElementData",
          pathRegex: "optimizely/src/components/cms/element/.*.[tj]s(x){0,1}$",
        },
        {
          // Add from all Pages, as .page.graphql file
          into: "PageData",
          pathRegex: "optimizely/src/components/cms/.*.page.graphql$",
        },
        {
          // Add from all Experiences, as .experience.graphql file
          into: "PageData",
          pathRegex: "optimizely/src/components/cms/.*.experience.graphql$",
        },
        {
          // Add from all Blocks, as .component.graphql file
          into: "BlockData",
          pathRegex: "optimizely/src/components/cms/.*.component.graphql$",
        },
        {
          // Add from all Elements, as .element.graphql file
          into: "ElementData",
          pathRegex: "optimizely/src/components/cms/.*.element.graphql$",
        },
      ],
    } as OptimizelyGraphPresetOptions,
  },
  "optimizely-configure-commerce": {
    schema: getConfigureCommerceSchemaInfo(),
    documents:
      process.env.OPTIMIZELY_CONFIGURE_COMMERCE_DOCUMENTS_GLOB ||
      "packages/optimizely-configure-commerce-graph-client/**/*.graphql",
    preset: GraphPreset,
    presetConfig: {
      skipSchemaValidation: true,
      skipDocumentsValidation: true,
    },
  },
  // Add more providers here, using env vars for overrides
};

const provider = providerMap[CMS_TYPE as keyof typeof providerMap];
if (!provider) {
  console.error(`❌ Invalid or missing CMS_TYPE: ${CMS_TYPE}`);
  process.exit(1);
}

const { schema, documents, preset, presetConfig } = provider;

const config: CodegenConfig = {
  overwrite: true,
  schema: schema,
  documents: documents,
  generates: {
    [`src/generated/${CMS_TYPE}/`]: {
      preset: preset,
      config: presetConfig,
    },
  },
};

export default config;
