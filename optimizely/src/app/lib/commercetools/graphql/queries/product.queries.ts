import { gql } from "graphql-request";

export const PRODUCT_PRICE_FRAGMENT = gql`
  fragment ProductPrice on ProductPrice {
    country
    value {
      centAmount
      currencyCode
      fractionDigits
    }
    discounted {
      value {
        currencyCode
        centAmount
        fractionDigits
      }
    }
  }
`;

export const PRODUCT_FRAGMENT = gql`
  fragment Product on Product {
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
        metaTitle(locale: $locale)
        metaDescription(locale: $locale)
        metaKeywords(locale: $locale)
        attributesRaw {
          referencedResourceSet {
            ... on Product {
              id
              masterData {
                current {
                  slug(locale: $locale)
                  name(locale: $locale)
                  masterVariant {
                    images {
                      url
                    }
                  }
                }
              }
            }
          }
          name
          value
        }
        allVariants {
          sku
          images {
            url
          }
          price(currency: $currency) {
            ...ProductPrice
          }
        }
        masterVariant {
          sku
          images {
            url
          }
          price(currency: $currency) {
            ...ProductPrice
          }
        }
      }
    }
  }
  ${PRODUCT_PRICE_FRAGMENT}
`;

export const GET_PRODUCTS = gql`
  query GetProducts(
    $limit: Int!
    $offset: Int!
    $locale: Locale!
    $currency: Currency!
    $where: String
  ) {
    products(limit: $limit, offset: $offset, where: $where) {
      results {
        id
        masterData {
          current {
            name(locale: $locale)
            description(locale: $locale)
            slug(locale: $locale)
            allVariants {
              price(currency: $currency) {
                ...ProductPrice
              }
            }
            masterVariant {
              images {
                url
              }
              price(currency: $currency) {
                ...ProductPrice
              }
              prices {
                ...ProductPrice
              }
            }
            metaTitle(locale: $locale)
            metaDescription(locale: $locale)
            metaKeywords(locale: $locale)
          }
        }
      }
      total
    }
  }
  ${PRODUCT_PRICE_FRAGMENT}
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: String!, $locale: Locale!) {
    product(id: $id) {
      id
      masterData {
        current {
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
          metaTitle(locale: $locale)
          metaDescription(locale: $locale)
          metaKeywords(locale: $locale)
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug(
    $locale: Locale!
    $currency: Currency!
    $where: String!
  ) {
    products(where: $where, limit: 1) {
      results {
        ...Product
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;
