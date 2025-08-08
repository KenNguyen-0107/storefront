import { columnTypeComponents } from "@/packages/composable-content-engine/blockRegistry";
import { IBlockTransformer } from "../interfaces/IBlockTransformer";

/**
 * Base class for block transformers that provides common functionality
 * for transforming CMS blocks to standardized output formats.
 *
 * @template TInput - The input block type
 * @template TOutput - The output transformed type
 */
export abstract class BaseBlockTransformer<TInput = any, TOutput = any> implements IBlockTransformer {
  /**
   * The type identifier for this transformer
   */
  abstract type: string;

  /**
   * Registry of transformers for nested block processing
   */
  protected transformers: Map<string, BaseBlockTransformer<any, any>> = new Map();

  /**
   * Determines if this transformer can handle the given block
   * @param block - The block to check
   * @returns True if this transformer can transform the block
   */
  canTransform(block: TInput): boolean {
    return (block as any).__typename === this.type;
  }

  /**
   * Transforms a block from the input format to the output format
   * @param block - The block to transform
   * @returns The transformed block
   */
  abstract transform(block: TInput): TOutput;

  /**
   * Sets the transformers registry for nested block processing
   * @param transformers - Map of transformer instances
   */
  setTransformers(transformers: Map<string, BaseBlockTransformer<any, any>>): void {
    this.transformers = transformers;
  }

  /**
   * Gets the transformers registry
   * @returns Map of transformer instances
   */
  getTransformers(): Map<string, BaseBlockTransformer<any, any>> {
    return this.transformers;
  }

  /**
   * Transforms nested blocks using the registered transformers
   * @param blocks - Array of blocks to transform
   * @returns Array of transformed blocks
   */
  protected transformBlocks(blocks: any[]): any[] {
    return blocks.map((block) => {
      const transformer = this.transformers.get(block.__typename);
      if (transformer && transformer.canTransform(block)) {
        return transformer.transform(block);
      }
      return block;
    });
  }

  /**
   * Utility method to safely access nested properties
   * @param obj - The object to access
   * @param path - The property path
   * @returns The value at the path or undefined
   */
  protected getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((current, key) => current?.[key], obj);
  }

  /**
   * Override the getComponentName method to use Litium-specific component mapping
   * @param component - The React component from columnTypeComponents
   * @returns The component name or undefined if not found
   */

  protected getComponentName(componentOrBlockType: React.ComponentType<any> | string): string | undefined {
    return Object.entries(columnTypeComponents).find(([, value]) => value === componentOrBlockType)?.[0];
  }
}
