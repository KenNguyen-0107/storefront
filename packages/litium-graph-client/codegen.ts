/**
 * GraphQL Code Generation utilities for Litium
 */

export type CodegenConfig = {
  /**
   * GraphQL schema URL or file path
   */
  schema: string;

  /**
   * GraphQL documents (queries, mutations, subscriptions)
   */
  documents: string[];

  /**
   * Output directory for generated files
   */
  generates: Record<string, CodegenOutput>;
};

export type CodegenOutput = {
  /**
   * Plugins to use for code generation
   */
  plugins: string[];

  /**
   * Configuration for the plugins
   */
  config?: Record<string, unknown>;
};

/**
 * Default codegen configuration for Litium
 */
export const defaultCodegenConfig: CodegenConfig = {
  schema: "./packages/litium-graph-client/schema.graphql",
  documents: [
    "./packages/litium-graph-client/queries/**/*.graphql",
    "./packages/litium-graph-client/fragments/**/*.graphql",
  ],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
    "src/generated/schema.json": {
      plugins: ["introspection"],
    },
  },
};

/**
 * Create a codegen configuration
 */
export function createCodegenConfig(schemaUrl: string, outputPath: string = "src/generated/graphql.ts"): CodegenConfig {
  return {
    ...defaultCodegenConfig,
    schema: schemaUrl,
    generates: {
      [outputPath]: defaultCodegenConfig.generates["src/generated/graphql.ts"],
      "src/generated/schema.json": defaultCodegenConfig.generates["src/generated/schema.json"],
    },
  };
}

export default defaultCodegenConfig;
