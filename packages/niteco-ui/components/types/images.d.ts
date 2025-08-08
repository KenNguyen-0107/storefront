declare module "*.jpg" {
  interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  }
  const content: StaticImageData;
  export default content;
}
