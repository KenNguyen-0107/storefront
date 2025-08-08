import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ProductDetailExperienceDataFragmentDoc, type ExperienceDataFragment, type ProductDetailExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql/client"

/**
 * Product Detail Experience Page
 * 
 */
export const ProductDetailExperienceExperience : CmsComponent<ProductDetailExperienceDataFragment> = ({ data, ctx }) => {
    const composition = (data as ExperienceDataFragment)?.composition
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} /> }
    </CmsEditable>
}
ProductDetailExperienceExperience.displayName = "Product Detail Experience Page (Experience/ProductDetailExperience)"
ProductDetailExperienceExperience.getDataFragment = () => ['ProductDetailExperienceData', ProductDetailExperienceDataFragmentDoc]
ProductDetailExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default ProductDetailExperienceExperience