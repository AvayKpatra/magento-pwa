import { gql } from "@apollo/client";

export const GET_SHORT_DESCRIPTION = gql`
  query getShortDescription($cartId: String!) {
    products(search: "") {
      items {
        uid
        sku
        name
        short_description {
          html
        }
      }
    }
  }
`;
