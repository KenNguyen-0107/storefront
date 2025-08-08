export interface FocusOutsideEvent {
  preventDefault: () => void;
  target: EventTarget | null;
}

export interface InteractOutsideEvent {
  preventDefault: () => void;
  target: EventTarget | null;
}

export interface OpenChangeDetails {
  open: boolean;
}

export interface DialogClasses {
  backdrop?: {
    base?: string;
  };
  backdropOverlay?: {
    base?: string;
  };
  dialog?: {
    base?: string;
    size?: {
      notFull?: string;
      full?: string;
    };
  };
  header?: {
    container?: string;
    title?: string;
  };
  closeButton?: {
    button?: string;
    icon?: string;
  };
  content?: {
    base?: string;
  };
  footer?: {
    base?: string;
  };
  [key: string]: any;
}

export interface IDialogProps {
  placement?: "center" | "top" | "bottom";
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xl2"
    | "xl3"
    | "xl4"
    | "xl5"
    | "full";
  id?: string;
  isOpen: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isPortal?: boolean;
  onClose?: () => void;
  dialogClasses?: DialogClasses;
  ariaLabel?: string;
}
