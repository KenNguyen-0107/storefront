import { AdapterFactory } from "@/packages/cms-adapter-core/src/AdapterFactory";
import { LitiumAdapter } from "@/packages/litium-cms-adapter/litiumAdapter";

AdapterFactory.register("litium", LitiumAdapter);
