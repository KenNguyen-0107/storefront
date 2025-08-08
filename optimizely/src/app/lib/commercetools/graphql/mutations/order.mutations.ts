import { gql } from "graphql-request";

export const CREATE_ORDER = gql`
  mutation CreateOrder($id: String!, $version: Long!) {
    createMyOrderFromCart(draft: { id: $id, version: $version }) {
      id
      orderNumber
      totalPrice {
        centAmount
        currencyCode
      }
      shippingInfo {
        shippingMethod {
          name
        }
        price {
          centAmount
          currencyCode
        }
      }
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
      }
    }
  }
`;
