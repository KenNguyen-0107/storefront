export interface IBadgeProps {
  variant: "inStock" | "outOfStock";
  className?: string;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  role?: string;
  text?: string;
}
