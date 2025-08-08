/**
 * System locales enum
 */
export enum SystemLocales {
  All = "ALL",
  Neutral = "NEUTRAL",
}

/**
 * Generic channel definition
 */
export interface ChannelDefinition {
  id?: string;
  defaultLocale?: string;
  defaultDomain?: string;
  slugToLocale?: (slug: string) => string;
}
