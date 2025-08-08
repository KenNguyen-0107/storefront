import React from "react";
import type { ReactNode } from "react";

interface SmartLinkProps {
  children?: ReactNode;
  href: string;
  className?: string;
  ref?: React.Ref<HTMLAnchorElement>;
  [key: string]: any;
}

export function SmartLink({ children, href, className, ref, ...props }: SmartLinkProps) {
  return (
    <a href={href} className={className} ref={ref} {...props}>
      {children}
    </a>
  );
}
