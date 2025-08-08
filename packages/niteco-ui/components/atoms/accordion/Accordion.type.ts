import { ReactNode } from "react";

export interface IAccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  isOpen?: boolean;
}

export interface IAccordionProps {
  items: IAccordionItem[];
  className?: string;
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  onItemToggle?: (itemId: string, isOpen: boolean) => void;
  variant?: "default" | "flush";
  accordionStyles?: any;
}
