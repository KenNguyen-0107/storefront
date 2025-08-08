import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  // Main schema configuration
  schema: "./packages/litium-graph-client/schema.graphql",

  // Document patterns - includes all GraphQL files in the project
  documents: [
    "./packages/litium-graph-client/queries/**/*.{graphql,gql}",
    "./packages/litium-graph-client/fragments/**/*.{graphql,gql}",
    "!./generated/**/*", // Exclude generated files
    "!./node_modules/**/*",
  ],

  // Extensions configuration for better IDE support
  extensions: {
    // Code generation integration
    codegen: {
      // Reference to your codegen config
      configFilePath: "./codegen.ts",
    },
    // Language server configuration
    languageService: {
      useSchemaFileDefinitions: true,
      validateSchemaAgainstDocuments: true,
    },
  },
};

export default config;
