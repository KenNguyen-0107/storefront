// Import all transformer files - they will auto-register themselves
import "./bannerBlockTransformer";
import "./gridBlockTransformer";
import "./richContentBlockTransformer";
import "./rowBlockTransformer";
import "./slideShowBlockTransformer";
import "./sharedContentBlockTransformer";

// Export the registry for convenience
export { ConfigureCommerceTransformerRegistry } from "../transformerRegistry";
