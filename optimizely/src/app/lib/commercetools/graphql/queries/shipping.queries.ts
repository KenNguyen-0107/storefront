import { gql } from "graphql-request";

export const GET_SHIPPING_METHODS = gql`
  query GetShippingMethods($cartId: String!) {
    shippingMethodsByCart(id: $cartId) {
      id
      name
      description
      zoneRates {
        shippingRates {
          price {
            centAmount
            currencyCode
          }
        }
      }
    }
  }
`;

export const GET_AVAILABLE_SHIPPING_METHODS = gql`
  query GetAvailableShippingMethods {
    shippingMethods {
      results {
        id
        name
        description
        isDefault
        zoneRates {
          zone {
            name
          }
          shippingRates {
            price {
              centAmount
              currencyCode
            }
            freeAbove {
              centAmount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
