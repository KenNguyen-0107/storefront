// Value Objects
export interface Money {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
}

export interface Price {
  value: Money;
  discounted?: {
    value: Money;
  };
  country?: string;
  fractionDigits?: number;
}

// DTOs
export interface MoneyInput {
  amount: number;
  currency: string;
}

export interface PriceInput {
  money: MoneyInput;
  countryCode?: string;
}
