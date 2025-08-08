import { DomainError } from "@/app/lib/commercetools/models/error.model";
import { CommerceResponse } from "@/app/lib/commercetools/models/commerce-dto.model";

export interface IAdapter<T, R> {
  adapt(data: T): R;
}

export interface IErrorAdapter<T> {
  adaptError(error: DomainError, fallback?: T): CommerceResponse<T>;
}

export interface IResponseAdapter<T, R> extends IAdapter<T, R> {
  adaptSuccess(data: T): CommerceResponse<R>;
  adaptError(error: DomainError, fallback?: R): CommerceResponse<R>;
}
