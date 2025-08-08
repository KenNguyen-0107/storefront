import type { ReactNode } from "react";
import type CarouselRowStyles from "./CarouselRow/CarouselRow.opti-style.json";
import type DefaultRowStyles from "./DefaultRow/DefaultRow.opti-style.json";
import type BackgroundRowStyles from "./BackgroundRow/BackgroundRow.opti-style.json";
import type GridRowStyles from "./GridRow/GridRow.opti-style.json";
import { LayoutProps } from "@remkoj/optimizely-cms-react";

export type CarouselRowProps = LayoutProps<typeof CarouselRowStyles>;
export type CarouselRowComponentProps<
  DT extends Record<string, any> = Record<string, any>,
> = {
  data: DT;
  layoutProps: CarouselRowProps | undefined;
} & React.JSX.IntrinsicElements["div"];
export type CarouselRowComponent<
  DT extends Record<string, any> = Record<string, any>,
> = (props: CarouselRowComponentProps<DT>) => ReactNode;

export type BackgroundRowProps = LayoutProps<typeof BackgroundRowStyles>;

export type DefaultRowProps = LayoutProps<typeof DefaultRowStyles>;
export type DefaultRowComponentProps<
  DT extends Record<string, any> = Record<string, any>,
> = {
  data: DT;
  layoutProps: DefaultRowProps | undefined;
} & React.JSX.IntrinsicElements["div"];
export type DefaultRowComponent<
  DT extends Record<string, any> = Record<string, any>,
> = (props: DefaultRowComponentProps<DT>) => ReactNode;

export type GridRowProps = LayoutProps<typeof GridRowStyles>;
export type GridRowComponentProps<
  DT extends Record<string, any> = Record<string, any>,
> = {
  data: DT;
  layoutProps: GridRowProps | undefined;
} & React.JSX.IntrinsicElements["div"];
export type GridRowComponent<
  DT extends Record<string, any> = Record<string, any>,
> = (props: GridRowComponentProps<DT>) => ReactNode;

export type RowLayoutProps = CarouselRowProps | DefaultRowProps | GridRowProps;
export type RowComponentProps<
  DT extends Record<string, any> = Record<string, any>,
  LP extends RowLayoutProps = RowLayoutProps,
> = {
  data: DT;
  layoutProps: LP | undefined;
} & React.JSX.IntrinsicElements["div"];

export type RowComponent<
  DT extends Record<string, any> = Record<string, any>,
  LP extends RowLayoutProps = RowLayoutProps,
> = (props: RowComponentProps<DT, LP>) => ReactNode;

export function isDefaultProps(
  props?: RowLayoutProps | null,
): props is DefaultRowProps {
  return props?.template == "DefaultRow";
}

export function isCarouselRowProps(
  props?: RowLayoutProps | null,
): props is CarouselRowProps {
  return props?.template == "CarouselRow";
}

export function isDefaultRowProps(
  props?: RowLayoutProps | null,
): props is DefaultRowProps {
  return props?.template == "DefaultRow";
}

export function isGridRowProps(
  props?: RowLayoutProps | null,
): props is GridRowProps {
  return props?.template == "GridRow";
}
