import { SearchOptions, SearchResult } from "./repository.interface";
import { CommerceResponse } from "../models/commerce-dto.model";

export interface IService<T, R = T> {
  getById(id: string): Promise<CommerceResponse<R | null>>;
  getAll(options?: SearchOptions): Promise<CommerceResponse<R[]>>;
  search(options: SearchOptions): Promise<CommerceResponse<SearchResult<R>>>;
  create(data: Partial<T>): Promise<CommerceResponse<R>>;
  update(id: string, data: Partial<T>): Promise<CommerceResponse<R>>;
  delete(id: string): Promise<CommerceResponse<void>>;
}
