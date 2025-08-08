import { createClient } from "./dist/index.js";
import { gql } from "graphql-request";

// Example 1: Basic client usage (Public access)
const publicClient = createClient({
  endpoint: "https://demo.litium.com/storefront.graphql",
});

// Example 2: Authenticated client with token
const authenticatedClient = createClient(
  {
    endpoint: "https://demo.litium.com/storefront.graphql",
    token: "your-bearer-token",
    contextUrl: "https://demo.litium.com",
  },
  undefined,
  {
    nextJsFetchDirectives: true, // Enable Next.js cache tagging
    debug: true, // Enable debug logging
  }
);

// Example 3: Environment-based configuration
const envClient = createClient(); // Reads from LITIUM_* environment variables

// Example GraphQL query for Litium
const GET_PRODUCTS = gql`
  query GetProducts($first: Int!) {
    products(first: $first) {
      nodes {
        id
        articleNumber
        name
        price {
          unitPriceIncludingVat
          currency {
            code
          }
        }
      }
    }
  }
`;

async function exampleUsage() {
  try {
    // Query with public client
    const publicData = await publicClient.query(GET_PRODUCTS, { first: 5 });
    console.log("Public products:", publicData.products.nodes.length);

    // Update token after login
    authenticatedClient.setToken("new-token-after-login");
    authenticatedClient.setContextUrl("https://demo.litium.com");

    // Update client flags
    authenticatedClient.updateFlags({
      debug: false, // Disable debug logging
      nextJsFetchDirectives: true, // Keep Next.js features enabled
    });

    // Query with authenticated client
    const authData = await authenticatedClient.query(GET_PRODUCTS, { first: 10 });
    console.log("Authenticated products:", authData.products.nodes.length);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Uncomment to run the example
// exampleUsage();
