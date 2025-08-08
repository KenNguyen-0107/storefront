import { gql } from "graphql-request";

export const CREATE_CART = gql`
  mutation CreateCart($draft: MyCartDraft!) {
    createMyCart(draft: $draft) {
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
      }
      totalPrice {
        centAmount
        currencyCode
      }
    }
  }
`;

export const ADD_LINE_ITEM = gql`
  mutation AddLineItem(
    $id: String!
    $version: Long!
    $sku: String!
    $quantity: Int!
  ) {
    updateMyCart(
      id: $id
      version: $version
      actions: [{ addLineItem: { sku: $sku, quantity: $quantity } }]
    ) {
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
    }
  }
`;

export const UPDATE_LINE_ITEM_QUANTITY = gql`
  mutation UpdateLineItemQuantity(
    $id: String!
    $version: Long!
    $lineItemId: String!
    $quantity: Int!
  ) {
    updateMyCart(
      id: $id
      version: $version
      actions: [
        {
          changeLineItemQuantity: {
            lineItemId: $lineItemId
            quantity: $quantity
          }
        }
      ]
    ) {
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
      }
      totalPrice {
        centAmount
        currencyCode
      }
    }
  }
`;

export const REMOVE_LINE_ITEM = gql`
  mutation RemoveLineItem($id: String!, $version: Long!, $lineItemId: String!) {
    updateMyCart(
      id: $id
      version: $version
      actions: [{ removeLineItem: { lineItemId: $lineItemId } }]
    ) {
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
      }
      totalPrice {
        centAmount
        currencyCode
      }
    }
  }
`;
