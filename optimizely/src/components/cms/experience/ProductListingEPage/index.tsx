import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import {
  ExperienceDataFragmentDoc,
  ProductListingEPageDataFragmentDoc,
  type ProductListingEPageDataFragment,
} from "@/gql/graphql";
import {
  OptimizelyComposition,
  isNode,
  CmsEditable,
} from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql/client";

/**
 * Product Lising Experence Page
 *
 */
export const ProductListingEPageExperience: CmsComponent<
  ProductListingEPageDataFragment
> = ({ data, ctx }) => {
  const composition = getFragmentData(
    ExperienceDataFragmentDoc,
    data,
  )?.composition;
  return (
    <CmsEditable
      as="div"
      className=""
      cmsFieldName="unstructuredData"
      ctx={ctx}
    >
      {composition && isNode(composition) && (
        <OptimizelyComposition node={composition} ctx={ctx} />
      )}
    </CmsEditable>
  );
};
ProductListingEPageExperience.displayName =
  "Product Lising Experence Page (Experience/ProductListingEPage)";
ProductListingEPageExperience.getDataFragment = () => [
  "ProductListingEPageData",
  ProductListingEPageDataFragmentDoc,
];
ProductListingEPageExperience.getMetaData = async (
  contentLink,
  locale,
  client,
) => {
  const sdk = getSdk(client);
  // Add your metadata logic here
  return {};
};

export default ProductListingEPageExperience;
