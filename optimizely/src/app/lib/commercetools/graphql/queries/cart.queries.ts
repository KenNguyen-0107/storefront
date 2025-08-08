import { gql } from "graphql-request";

export const GET_ACTIVE_CART = gql`
  query GetActiveCart {
    me {
      activeCart {
        id
        version
        lineItems {
          id
          name(locale: "en")
          quantity
          price {
            value {
              centAmount
              currencyCode
            }
          }
          totalPrice {
            centAmount
            currencyCode
          }
          variant {
            images {
              url
            }
          }
        }
        totalPrice {
          centAmount
          currencyCode
        }
        shippingAddress {
          firstName
          lastName
          streetName
          city
          country
          postalCode
        }
        billingAddress {
          firstName
          lastName
          streetName
          city
          country
          postalCode
        }
        shippingInfo {
          shippingMethod {
            id
            name
          }
          price {
            centAmount
            currencyCode
          }
        }
      }
    }
  }
`;
