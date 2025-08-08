import { gql } from "graphql-request";
import { PRODUCT_PRICE_FRAGMENT } from "./product.queries";

const VARIANT_FRAGMENT = gql`
  fragment VariantData on ProductVariant {
    key
    sku
    price(currency: $currency) {
      ...ProductPrice
    }
    availability {
      noChannel {
        isOnStock
      }
    }
    images {
      url
      label
    }
    attributesRaw {
      name
      value
    }
  }
  ${PRODUCT_PRICE_FRAGMENT}
`;

const PRODUCT_FRAGMENT = gql`
  fragment ProductData on Product {
    id
    masterData {
      current {
        slug(locale: $locale)
        categories {
          id
          key
        }
        masterVariant {
          ...VariantData
        }
        allVariants {
          ...VariantData
        }
      }
    }
  }
  ${VARIANT_FRAGMENT}
`;

const PRODUCT_SELECTION_FRAGMENT = gql`
  fragment ProductSelection on ProductSelection {
    productRefs {
      results {
        product {
          ...ProductData
        }
      }
      count
      total
      offset
      exists
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCT_SELECTION_BY_KEY = gql`
  query GetProductSelectionByKey(
    $productSelectionKey: String!
    $locale: Locale!
    $currency: Currency!
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
    $currency: Currency!
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
    $currency: Currency!
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
        ...ProductSelection
      }
      total
      offset
      count
      exists
    }
  }
`;
