import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";
import { OptimizelyConfigureCommerceAdapter } from "./configureCommerceAdapter";
import { ADAPTER_NAME } from "./src/constants";

AdapterFactory.register(ADAPTER_NAME, OptimizelyConfigureCommerceAdapter);
