/**
 * Combines any number of text parts into a single string with line breaks.
 * Skips empty or undefined values.
 * @param parts The text parts to combine
 * @returns Combined text with line breaks or undefined if no content
 */
export function combineTextParts(...parts: (string | null | undefined)[]): string | undefined {
  const filtered = parts.filter((part) => !!part) as string[];
  return filtered.length > 0 ? filtered.join("\n\n") : undefined;
}
