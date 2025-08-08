import {
  ValidationError,
  ErrorCode,
} from "@/app/lib/commercetools/models/error.model";
import { logger } from "@/app/lib/commercetools/utils/logger.utils";

export interface ValidationRule<T> {
  validate(value: T): boolean;
  message: string;
  code: ErrorCode;
}

export class Validator<T> {
  private rules: ValidationRule<T>[] = [];

  addRule(rule: ValidationRule<T>): this {
    this.rules.push(rule);
    return this;
  }

  validate(value: T, fieldName?: string): void {
    for (const rule of this.rules) {
      if (!rule.validate(value)) {
        logger.warn("Validation failed", {
          fieldName,
          rule: rule.message,
          value,
        });
        throw new ValidationError(
          fieldName ? `${fieldName}: ${rule.message}` : rule.message,
          rule.code,
          fieldName,
        );
      }
    }
  }
}

// Common validation rules
export const required = <T>(): ValidationRule<T> => ({
  validate: (value: T) => value !== undefined && value !== null && value !== "",
  message: "Field is required",
  code: ErrorCode.MISSING_REQUIRED_FIELD,
});

export const minLength = (min: number): ValidationRule<string> => ({
  validate: (value: string) => !value || value.length >= min,
  message: `Must be at least ${min} characters long`,
  code: ErrorCode.INVALID_FORMAT,
});

export const maxLength = (max: number): ValidationRule<string> => ({
  validate: (value: string) => !value || value.length <= max,
  message: `Must be no more than ${max} characters long`,
  code: ErrorCode.INVALID_FORMAT,
});

export const pattern = (
  regex: RegExp,
  description: string,
): ValidationRule<string> => ({
  validate: (value: string) => !value || regex.test(value),
  message: `Must match format: ${description}`,
  code: ErrorCode.INVALID_FORMAT,
});

export const email = (): ValidationRule<string> => ({
  validate: (value: string) =>
    !value || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
  message: "Must be a valid email address",
  code: ErrorCode.INVALID_FORMAT,
});

export const url = (): ValidationRule<string> => ({
  validate: (value: string) =>
    !value ||
    /^https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(
      value,
    ),
  message: "Must be a valid URL",
  code: ErrorCode.INVALID_FORMAT,
});

export const min = (minimum: number): ValidationRule<number> => ({
  validate: (value: number) => !value || value >= minimum,
  message: `Must be at least ${minimum}`,
  code: ErrorCode.INVALID_FORMAT,
});

export const max = (maximum: number): ValidationRule<number> => ({
  validate: (value: number) => !value || value <= maximum,
  message: `Must be no more than ${maximum}`,
  code: ErrorCode.INVALID_FORMAT,
});

// Product-specific validation rules
export const validProductSlug = (): ValidationRule<string> => ({
  validate: (value: string) => !value || /^[a-z0-9-]+$/.test(value),
  message:
    "Product slug must contain only lowercase letters, numbers, and hyphens",
  code: ErrorCode.INVALID_FORMAT,
});

export const validSKU = (): ValidationRule<string> => ({
  validate: (value: string) => !value || /^[A-Z0-9-_]+$/.test(value),
  message:
    "SKU must contain only uppercase letters, numbers, hyphens, and underscores",
  code: ErrorCode.INVALID_FORMAT,
});

export const validPrice = (): ValidationRule<number> => ({
  validate: (value: number) => !value || (value >= 0 && Number.isFinite(value)),
  message: "Price must be a non-negative number",
  code: ErrorCode.INVALID_FORMAT,
});

export const validCurrencyCode = (): ValidationRule<string> => ({
  validate: (value: string) => !value || /^[A-Z]{3}$/.test(value),
  message: "Currency code must be a 3-letter ISO code",
  code: ErrorCode.INVALID_FORMAT,
});

// Example usage:
export const createProductValidator = () => {
  const nameValidator = new Validator<string>()
    .addRule(required())
    .addRule(minLength(2))
    .addRule(maxLength(100));

  const slugValidator = new Validator<string>()
    .addRule(required())
    .addRule(minLength(2))
    .addRule(maxLength(50))
    .addRule(validProductSlug());

  const skuValidator = new Validator<string>()
    .addRule(minLength(3))
    .addRule(maxLength(20))
    .addRule(validSKU());

  const priceValidator = new Validator<number>()
    .addRule(required())
    .addRule(validPrice());

  return {
    validateName: (name: string) => nameValidator.validate(name, "name"),
    validateSlug: (slug: string) => slugValidator.validate(slug, "slug"),
    validateSKU: (sku: string) => skuValidator.validate(sku, "sku"),
    validatePrice: (price: number) => priceValidator.validate(price, "price"),
  };
};
