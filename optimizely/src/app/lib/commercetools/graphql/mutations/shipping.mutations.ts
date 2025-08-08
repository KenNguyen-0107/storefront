import { gql } from "graphql-request";

export const SET_SHIPPING_ADDRESS = gql`
  mutation SetShippingAddress(
    $id: String!
    $version: Long!
    $address: AddressInput!
  ) {
    updateMyCart(
      id: $id
      version: $version
      actions: [{ setShippingAddress: { address: $address } }]
    ) {
      id
      version
      shippingAddress {
        firstName
        lastName
        streetName
        city
        country
        postalCode
      }
    }
  }
`;

export const SET_SHIPPING_METHOD = gql`
  mutation SetShippingMethod(
    $id: String!
    $version: Long!
    $shippingMethodId: String!
  ) {
    updateMyCart(
      id: $id
      version: $version
      actions: [
        {
          setShippingMethod: {
            shippingMethod: { id: $shippingMethodId, typeId: ShippingMethod }
          }
        }
      ]
    ) {
      id
      version
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
      totalPrice {
        centAmount
        currencyCode
      }
    }
  }
`;
