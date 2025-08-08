// Auto-import all transformer files to register them with the transformer registry
// This eliminates the need to manually import each transformer in litiumAdapter.ts

// Import all transformer files - they will auto-register themselves
import "./bannerBlockTransformer";
import "./imageTextBlockTransformer";
import "./sliderBlockTransformer";
import "./columnBlockTransformer";
import "./rowBlockTransformer";
import "./sectionBlockTransformer";
import "./navigationItemTransformer";
import "./navigationLinksBlockTransformer";
import "./imageListBlockTransformer";
import "./buttonBlockTransformer";
import "./richContentBlockTransformer";
import "./topHeaderBlockTransformer";

// Export the registry for convenience
export { LitiumTransformerRegistry } from "../TransformerRegistry";
