import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { PDPCarouselElementDataFragmentDoc, type PDPCarouselElementDataFragment } from "@/gql/graphql";
import { PDPCarouselElementLayoutProps } from "./displayTemplates";

/**
 * PDP Carousel Element
 * Product Carousel Element
 */
export const PDPCarouselElementComponent : CmsComponent<PDPCarouselElementDataFragment, PDPCarouselElementLayoutProps> = ({ data, layoutProps, children }) => {
    const componentName = 'PDP Carousel Element'
    const componentInfo = 'Product Carousel Element'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
PDPCarouselElementComponent.displayName = "PDP Carousel Element (Component/PDPCarouselElement)"
PDPCarouselElementComponent.getDataFragment = () => ['PDPCarouselElementData', PDPCarouselElementDataFragmentDoc]

export default PDPCarouselElementComponent