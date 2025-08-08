// types/select.ts

export interface ISelectOption {
  label: string;
  value: string;
}

export type SelectVariant = "xs" | "sm" | "md" | "lg";

export interface ISelectProps {
  options: ISelectOption[];
  defaultValue?: string | null;
  onChange?: (option: ISelectOption) => void;
  placeholder?: string;
  variant?: SelectVariant;
  disabled?: boolean;
  selectStyles?: any;
}
