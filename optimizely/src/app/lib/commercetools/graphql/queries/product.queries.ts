import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $limit: Int!
    $offset: Int!
    $locale: Locale!
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
            masterVariant {
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
      total
    }
  }
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
  query GetProductBySlug($locale: Locale!, $where: String!) {
    products(where: $where, limit: 1) {
      results {
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
            attributesRaw {
              referencedResourceSet {
                ... on Product {
                  id
                  masterData {
                    current {
                      slug(locale: $locale)
                      name(locale: $locale)
                      masterVariant{
                      images {
                        url
                      }
                    }
                    }
                  }
                }
              }
              name
            }
          }
        }
      }
    }
  }
`;
