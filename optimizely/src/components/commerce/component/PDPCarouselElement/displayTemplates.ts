import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode, JSX } from "react"
import type PDPVariantCarouselStyles from "./PDPVariantCarousel.opti-style.json"

export type PDPVariantCarouselProps = LayoutProps<typeof PDPVariantCarouselStyles>
export type PDPVariantCarouselComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: PDPVariantCarouselProps | undefined
} & JSX.IntrinsicElements['div']
export type PDPVariantCarouselComponent<DT extends Record<string, any> = Record<string, any>> = (props: PDPVariantCarouselComponentProps<DT>) => ReactNode


export type PDPCarouselElementLayoutProps = PDPVariantCarouselProps
export type PDPCarouselElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends PDPCarouselElementLayoutProps = PDPCarouselElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type PDPCarouselElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends PDPCarouselElementLayoutProps = PDPCarouselElementLayoutProps> = (props: PDPCarouselElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: PDPCarouselElementLayoutProps | null) : props is PDPVariantCarouselProps
{
    return props?.template == "PDPVariantCarousel"
}

export function isPDPVariantCarouselProps(props?: PDPCarouselElementLayoutProps | null) : props is PDPVariantCarouselProps
{
    return props?.template == "PDPVariantCarousel"
}