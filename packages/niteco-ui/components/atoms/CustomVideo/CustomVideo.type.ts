export interface ICustomVideoProps {
  videoUrl?: string;
  title?: string;
  autoplayAsBool?: boolean;
  id?: string;
  loading?: "lazy" | "eager";
  backgroundImageUrl?: string;
  playOnPopup?: boolean;
  className?: string;
}

export interface IVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  autoplayAsBool?: boolean;
  className?: string;
}
