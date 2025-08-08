import { gql } from "graphql-request";

export const GET_MY_ORDERS = gql`
  query GetMyOrders($limit: Int = 20, $offset: Int = 0) {
    me {
      orders(limit: $limit, offset: $offset) {
        results {
          id
          orderNumber
          createdAt
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
            variant {
              images {
                url
              }
            }
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
        }
        total
      }
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($id: String!) {
    me {
      order(id: $id) {
        id
        orderNumber
        createdAt
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
          variant {
            images {
              url
            }
          }
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
      }
    }
  }
`;
