import { gql } from "graphql-request";

export const SET_BILLING_ADDRESS = gql`
  mutation SetBillingAddress(
    $id: String!
    $version: Long!
    $address: AddressInput!
  ) {
    updateMyCart(
      id: $id
      version: $version
      actions: [{ setBillingAddress: { address: $address } }]
    ) {
      id
      version
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
`;
