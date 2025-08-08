import { gql } from "graphql-request";

const PRODUCT_SELECTION_FRAGMENT = gql`
  fragment ProductSelection on ProductSelection {
    id
    key
    version
    name(locale: $locale)
    nameAllLocales {
      locale
      value
    }
    productCount
    mode
    createdAt
    lastModifiedAt
    productRefs(limit: $limit, offset: $offset) {
      results {
        productRef {
          id
          typeId
        }
        product {
          id
          masterData {
            current {
              categories {
                id
                key
              }
              name(locale: $locale)
              description(locale: $locale)
              slug(locale: $locale)
              masterVariant {
                sku
                images {
                  url
                }
                prices {
                  value {
                    centAmount
                    currencyCode
                  }
                }
              }
            }
          }
        }
        variantSelection {
          type
          skus
        }
        variantExclusion {
          skus
        }
      }
      total
      offset
      count
      exists
    }
  }
`;

export const GET_PRODUCT_SELECTION_BY_KEY = gql`
  query GetProductSelectionByKey(
    $productSelectionKey: String!
    $locale: Locale!
    $limit: Int = 20
    $offset: Int = 0
  ) {
    productSelection(key: $productSelectionKey) {
      ...ProductSelection
    }
  }
  ${PRODUCT_SELECTION_FRAGMENT}
`;

export const GET_PRODUCT_SELECTION_BY_ID = gql`
  query GetProductSelectionById(
    $productSelectionId: String!
    $locale: Locale!
    $limit: Int = 20
    $offset: Int = 0
  ) {
    productSelection(id: $productSelectionId) {
      ...ProductSelection
    }
  }
  ${PRODUCT_SELECTION_FRAGMENT}
`;

export const GET_PRODUCT_SELECTIONS = gql`
  query GetProductSelections(
    $limit: Int!
    $offset: Int!
    $locale: Locale!
    $where: String
    $sort: [String!]
  ) {
    productSelections(
      limit: $limit
      offset: $offset
      where: $where
      sort: $sort
    ) {
      results {
        id
        key
        version
        name(locale: $locale)
        nameAllLocales {
          locale
          value
        }
        productCount
        mode
        createdAt
        lastModifiedAt
      }
      total
      offset
      count
      exists
    }
  }
`;
