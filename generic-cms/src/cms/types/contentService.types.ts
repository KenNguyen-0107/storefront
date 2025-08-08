// Content service configuration interface
export interface ContentServiceConfig {
  client: any; // CMS client (LitiumGraphClient, OptimizelyClient, etc.)
  adapterType: "litium" | "optimizely" | "custom";
  debug?: boolean;
}

// Content adapter interface
export interface ContentAdapter<TInput = any, TOutput = any> {
  transform(input: TInput): TOutput;
}

// Content service interface
export interface IContentService {
  getPageContentByUrl(url: string): Promise<any>;
  getPageContentById(id: string): Promise<any>;
  updateClient(client: any): void;
  getClient(): any;
}

// Content fetching options
export interface ContentFetchOptions {
  includeMetadata?: boolean;
  includeBlocks?: boolean;
  includeFields?: boolean;
  transformContent?: boolean;
  debug?: boolean;
}

// Content query parameters
export interface ContentQueryParams {
  url?: string;
  id?: string;
  locale?: string;
  version?: string;
  preview?: boolean;
}

// Content service error types
export enum ContentServiceErrorType {
  CONFIGURATION_ERROR = "CONFIGURATION_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  FETCH_ERROR = "FETCH_ERROR",
  TRANSFORMATION_ERROR = "TRANSFORMATION_ERROR",
  ADAPTER_ERROR = "ADAPTER_ERROR",
  CLIENT_ERROR = "CLIENT_ERROR",
}

// Content service error interface
export interface ContentServiceError extends Error {
  type: ContentServiceErrorType;
  code?: string;
  details?: Record<string, any>;
  originalError?: Error;
}

// Content service result wrapper
export interface ContentServiceResult<T = any> {
  success: boolean;
  data?: T;
  error?: ContentServiceError;
  metadata?: {
    fetchTime: number;
    source: string;
    cached: boolean;
  };
}

// Adapter factory interface
export interface AdapterFactory {
  createAdapter(type: string): ContentAdapter;
  registerAdapter(type: string, adapter: ContentAdapter): void;
  getAvailableAdapters(): string[];
}

// Content service cache interface
export interface ContentServiceCache {
  get(key: string): Promise<any>;
  set(key: string, value: any, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
}
