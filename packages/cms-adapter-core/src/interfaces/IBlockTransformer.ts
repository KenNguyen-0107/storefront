export interface IBlockTransformer {
  type: string;
  canTransform(block: any): boolean;
  transform(block: any): any;
}
