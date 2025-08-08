import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";
import { OptimizelyAdapter } from "./optimizelyAdapter";

AdapterFactory.register("optimizely", OptimizelyAdapter);
