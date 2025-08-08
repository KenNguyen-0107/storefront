export interface ToggleOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ToggleSelectionBaseProps {
  options: ToggleOption[];
  onChange: (value: string | string[]) => void;
  disabled?: boolean;
  ariaLabel?: string;
  error?: boolean;
  errorText?: string;
  direction?: "horizontal" | "vertical";
  maxListHeight?: string;
  className?: string;
  [key: string]: any;
}

export interface SingleToggleSelectionProps extends ToggleSelectionBaseProps {
  multiSelect?: false;
  value?: string;
  defaultValue?: string;
}

export interface MultiToggleSelectionProps extends ToggleSelectionBaseProps {
  multiSelect: true;
  value?: string[];
  defaultValue?: string[];
}

export type ToggleSelectionProps =
  | SingleToggleSelectionProps
  | MultiToggleSelectionProps;
