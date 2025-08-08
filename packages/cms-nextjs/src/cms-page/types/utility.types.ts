/**
 * Utility type that ensures specific keys are required in a type
 * @template T - The base type
 * @template K - The keys that should be required
 */
export type ContextWith<T, K extends keyof T> = T & Required<Pick<T, K>>;
