// This file registers all available CMS adapters with the AdapterFactory
// Import this file early in your application to ensure all adapters are registered

// Register Litium CMS Adapter
import "@/packages/litium-cms-adapter/";
import "@/packages/optimizely-configure-commerce-adapter/";
import "@/packages/optimizely-cms-adapter/";

// Register Optimizely CMS Adapter (when implemented)

// Register other CMS adapters here as needed
// import "@/packages/other-cms-adapter/";

console.log("Registered CMS adapters:", ["litium", "optimizely-configure-commerce", "optimizely"]);
