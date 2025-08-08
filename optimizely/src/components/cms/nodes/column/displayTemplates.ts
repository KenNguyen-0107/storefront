import type { ReactNode } from "react";
import type DefaultColumnStyles from "./DefaultColumn/DefaultColumn.opti-style.json";
import { LayoutProps } from "@remkoj/optimizely-cms-react";

export type DefaultColumnProps = LayoutProps<typeof DefaultColumnStyles>;
export type DefaultColumnComponentProps<
  DT extends Record<string, any> = Record<string, any>,
> = {
  data: DT;
  layoutProps: DefaultColumnProps | undefined;
} & React.JSX.IntrinsicElements["div"];
export type DefaultColumnComponent<
  DT extends Record<string, any> = Record<string, any>,
> = (props: DefaultColumnComponentProps<DT>) => ReactNode;

export type ColumnLayoutProps = DefaultColumnProps;
export type ColumnComponentProps<
  DT extends Record<string, any> = Record<string, any>,
  LP extends ColumnLayoutProps = ColumnLayoutProps,
> = {
  data: DT;
  layoutProps: LP | undefined;
} & React.JSX.IntrinsicElements["div"];

export type ColumnComponent<
  DT extends Record<string, any> = Record<string, any>,
  LP extends ColumnLayoutProps = ColumnLayoutProps,
> = (props: ColumnComponentProps<DT, LP>) => ReactNode;

export function isDefaultProps(
  props?: ColumnLayoutProps | null,
): props is DefaultColumnProps {
  return props?.template == "DefaultColumn";
}

export function isDefaultColumnProps(
  props?: ColumnLayoutProps | null,
): props is DefaultColumnProps {
  return props?.template == "DefaultColumn";
}
