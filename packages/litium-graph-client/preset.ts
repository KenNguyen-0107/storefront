import { type Types } from '@graphql-codegen/plugin-helpers';
import { preset as clientPreset, type ClientPresetConfig as ClientPresetOptions } from '@graphql-codegen/client-preset';
import * as GraphQLRequestPlugin from '@graphql-codegen/typescript-graphql-request';
import * as AddPlugin from '@graphql-codegen/add';

export type PresetOptions = ClientPresetOptions;

export const preset: Types.OutputPreset<PresetOptions> = {
  prepareDocuments: async (outputFilePath, outputSpecificDocuments) => {
    // For Litium, just use the base client preset's document preparation
    return clientPreset.prepareDocuments
      ? await clientPreset.prepareDocuments(outputFilePath, outputSpecificDocuments)
      : [...outputSpecificDocuments, `!${outputFilePath}`];
  },

  buildGeneratesSection: async (options) => {
    options.config = {
      dedupeFragments: true,
      emitLegacyCommonJSImports: false,
      ...options.config,
      namingConvention: 'keep',
    };

    // Optionally, you can add document transforms here if needed for Litium

    // Remove fragments that target types not present in the schema (optional, but good for robustness)
    options.documents = options.documents.map((doc) => {
      if (doc.document) {
        // No-op for now, but you can add fragment filtering logic if needed
        return doc;
      }
      return doc;
    });

    // Build the base preset files
    const section: Array<Types.GenerateOptions> = await clientPreset.buildGeneratesSection(options);

    // Add GraphQL Request Client
    section.push({
      filename: `${options.baseOutputDir}client.ts`,
      pluginMap: {
        add: AddPlugin,
        'typescript-graphql-request': GraphQLRequestPlugin,
      },
      plugins: [
        {
          add: {
            content: ['import type * as Schema from "./graphql";'],
          },
        },
        {
          'typescript-graphql-request': {
            ...options.config,
            useTypeImports: true,
            importOperationTypesFrom: 'Schema',
          },
        },
      ],
      schema: options.schema,
      schemaAst: options.schemaAst,
      config: {
        ...options.config,
      },
      profiler: options.profiler,
      documents: options.documents,
      documentTransforms: options.documentTransforms,
    });

    // Update all sections for Litium GraphQL
    section.forEach((fileConfig, idx) => {
      // Modify index.ts with additional exports
      if (fileConfig.filename.endsWith('index.ts')) {
        section[idx].plugins.unshift({
          add: {
            content: [
              'export * as Schema from "./graphql";',
              'export { getSdk, type Sdk } from "./client";',
            ],
          },
        });
      }
    });

    return section;
  },
};

export default preset;