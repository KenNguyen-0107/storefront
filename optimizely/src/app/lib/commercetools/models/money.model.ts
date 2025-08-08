// Value Objects
export interface Money {
  centAmount: number;
  currencyCode: string;
}

export interface Price {
  value: Money;
  country?: string;
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
