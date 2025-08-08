import {
  readEnvironmentVariables,
  applyConfigDefaults,
  validateConfig,
  type LitiumGraphConfigInternal,
  type LitiumGraphConfig,
} from "../config";
import { GraphQLClient, type RequestMiddleware, type Variables } from "graphql-request";
import {
  AuthMode,
  type RequestMethod,
  type ILitiumGraphClient,
  type LitiumGraphSiteInfo,
  type ILitiumGraphClientFlags,
  type LitiumCmsSchema,
  type FrontendUser,
  SchemaVersion,
} from "./types";
import { isError, validateToken, getAuthMode } from "./utils";

type RequestExtendedInit<V extends Variables = Variables> = Parameters<RequestMiddleware<V>>[0] & {
  next?: {
    revalidate?: false | 0 | number;
    cache?: "force-cache" | "no-store";
    tags?: string[];
  };
};

const defaultFlags: ILitiumGraphClientFlags = {
  nextJsFetchDirectives: false,
  debug: false,
};

export class LitiumGraphClient extends GraphQLClient implements ILitiumGraphClient {
  protected _config: LitiumGraphConfigInternal;
  private _token: string | undefined;
  private _flags: ILitiumGraphClientFlags;
  private _customMiddleware: RequestMiddleware<Variables> | undefined;

  public get currentLitiumCmsSchema(): LitiumCmsSchema {
    return this._config.litium_cms_schema;
  }

  public get debug(): boolean {
    return this._config.debug ?? false;
  }

  public get frontendUser(): FrontendUser | undefined {
    return undefined;
  }

  protected get token(): string | undefined {
    return this._token;
  }

  protected set token(newValue: string | undefined) {
    if (!validateToken(newValue)) throw new Error("❌ [Litium Graph] Invalid GraphQL token");
    if (this.debug) console.log(`🔑 [Litium Graph] Updating token to ${newValue ? "Bearer ***" : "none"}`);
    this._token = newValue;
  }

  public get siteInfo(): LitiumGraphSiteInfo {
    return {
      frontendDomain: undefined,
      cmsURL: undefined,
      storefrontContextURL: this._config.contextUrl,
    };
  }

  public get currentAuthMode(): AuthMode {
    return getAuthMode(this._token);
  }

  public get graphSchemaVersion(): SchemaVersion {
    return this._config.graph_schema || SchemaVersion.Default;
  }

  public constructor(config?: LitiumGraphConfig, token?: string | undefined, flags?: Partial<ILitiumGraphClientFlags>) {
    const configFlags = { ...defaultFlags, ...flags };

    const litiumConfig: LitiumGraphConfig = applyConfigDefaults(config ?? readEnvironmentVariables());
    if (!validateToken(token)) throw new Error("❌ [Litium Graph] Invalid GraphQL token");
    const authMode = getAuthMode(token);
    if (!validateConfig(litiumConfig, authMode == AuthMode.Public, true))
      throw new Error("❌ [Litium Graph] Invalid GraphQL configuration");

    const QUERY_LOG = litiumConfig.query_log ?? false;
    super(litiumConfig.endpoint, {
      method: "post",
      keepalive: false,
      credentials: "include",
      redirect: "manual",
      requestMiddleware: async <V extends Variables = Variables>(request: RequestExtendedInit<V>) => {
        if (this._flags.nextJsFetchDirectives && request.operationName) {
          if (!Array.isArray(request.next?.tags)) {
            if (!request.next) request.next = {};
            request.next.tags = [];
          }
          request.next.tags = request.next.tags.filter((x) => !x.startsWith("litium-graph-operation-"));
          request.next.tags.push("litium-graph-operation-" + request.operationName);
        }
        if (this._customMiddleware) request = (await this._customMiddleware(request)) as RequestExtendedInit<V>;

        if (QUERY_LOG || this._flags.debug) {
          console.log(`🔎 [Litium Graph] [Request URL] ${request.url}\n
🔎 [Litium Graph] [Request Headers] ${JSON.stringify(request.headers)}\n
🔎 [Litium Graph] [Request Query] ${request.body}\n
🔖 [Litium Graph] [Request Variables] ${JSON.stringify(request.variables)}`);
          if (this._flags.nextJsFetchDirectives)
            console.log(`🔖 [Litium Graph] [Request Next.JS] ${JSON.stringify(request.next)}`);
        }
        return request;
      },
      responseMiddleware: (response) => {
        if (isError(response)) {
          console.error(`❌ [Litium Graph] [Error] ${response.name} => ${response.message}`);
        } else if (response.errors) {
          response.errors.forEach(({ message, locations, path, name, source }) => {
            const locationList = (locations ?? [])
              .map((loc) => {
                return `[Line: ${loc.line}, Column: ${loc.column}]`;
              })
              .join("; ");
            const errorName = name && name != "undefined" ? ` ${name}` : "";
            const sourceInfo = source?.body ?? "";
            const sourceName = source?.name ? ` in ${source.name}` : "";
            console.error(
              `❌ [Litium Graph] [GraphQL${errorName} error${sourceName}]:\n  Message: ${message}\n  Location: ${locationList}\n  Path: ${path}\n  Query: ${sourceInfo}`
            );
          });
        } else if (QUERY_LOG || this._flags.debug) {
          console.log(`📦 [Litium Graph] [Response Data] ${JSON.stringify(response.data)}`);
          console.log(
            `🔖 [Litium Graph] [Response Cost] ${JSON.stringify((response.extensions as { cost?: number } | undefined)?.cost || 0)}`
          );
        }
      },
    });

    this._config = litiumConfig;
    this._token = token;
    this._flags = configFlags;
    this.updateRequestConfig();
  }

  public setToken(newToken: string): LitiumGraphClient {
    this.token = newToken;
    this.updateRequestConfig();
    return this;
  }

  public setContextUrl(contextUrl: string): LitiumGraphClient {
    this._config = { ...this._config, contextUrl };
    this.updateRequestConfig();
    return this;
  }

  public updateAuthentication(tokenOrAuthmode?: string | AuthMode | undefined): ILitiumGraphClient {
    if (tokenOrAuthmode == AuthMode.Token)
      throw new Error("❌ [Litium Graph] Provide the authentication token to switch to AuthMode.Token");
    this.token = tokenOrAuthmode == AuthMode.Public ? undefined : tokenOrAuthmode;
    this.updateRequestConfig();
    return this;
  }

  public toJSON(): LitiumGraphConfig {
    return {
      endpoint: this._config.endpoint,
      token: this._config.token,
      contextUrl: this._config.contextUrl,
      litium_cms_schema: this._config.litium_cms_schema,
      query_log: this._config.query_log,
      debug: this._config.debug,
      graph_schema: this._config.graph_schema,
    };
  }

  public setRequestMiddleware(additionalMiddleware: RequestMiddleware): LitiumGraphClient {
    this._customMiddleware = additionalMiddleware;
    return this;
  }

  public query: RequestMethod = (...args) => {
    return this.request(...args);
  };

  public mutate: RequestMethod = (...args) => {
    return this.request(...args);
  };

  public updateFlags(newFlags: Partial<ILitiumGraphClientFlags>): ILitiumGraphClient {
    this._flags = { ...this._flags, ...newFlags };
    this.updateRequestConfig();
    return this;
  }

  public restoreFlags(): ILitiumGraphClient {
    return this;
  }

  public setFrontendUser(): boolean {
    return false;
  }

  protected updateRequestConfig(): void {
    const headers = this.buildDefaultHeaders();
    this.setHeaders(headers);
    this.setEndpoint(this._config.endpoint);
  }

  protected buildDefaultHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (this._token) {
      headers["Authorization"] = `Bearer ${this._token}`;
    }

    if (this._config.contextUrl) {
      headers["x-litium-storefront-context-url"] = this._config.contextUrl;
    }

    return headers;
  }
}
