export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  asChild?: boolean;
  buttonLabel?: string;
  buttonType?: string;
  children?: React.ReactNode;
}
