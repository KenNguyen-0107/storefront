// Value Objects
export interface ImageDimensions {
  width: number;
  height: number;
}

export interface Image {
  url: string;
  label?: string;
  alt?: string;
  dimensions?: ImageDimensions;
}

// DTOs
export interface ImageInput {
  url: string;
  label?: string;
  alt?: string;
  width?: number;
  height?: number;
}
