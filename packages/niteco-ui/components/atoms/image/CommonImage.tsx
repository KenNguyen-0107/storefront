export interface CommonImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CommonImage = ({ src, alt, width, height, className, style }: CommonImageProps) => {
  return <img src={src} alt={alt} width={width} height={height} className={className} style={style} />;
};

CommonImage.displayName = "CommonImage";

export default CommonImage;
