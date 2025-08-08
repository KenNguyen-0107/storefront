import { IResponseAdapter } from "@/app/lib/commercetools/interfaces/adapter.interface";
import { SearchResult } from "@/app/lib/commercetools/interfaces/repository.interface";
import { CommerceResponse } from "@/app/lib/commercetools/models/commerce-dto.model";
import { DomainError } from "@/app/lib/commercetools/models/error.model";

export class SearchResultAdapter<T, R>
  implements IResponseAdapter<SearchResult<T>, SearchResult<R>>
{
  constructor(private readonly itemAdapter: IResponseAdapter<T, R>) {}

  adapt(result: SearchResult<T>): SearchResult<R> {
    return {
      items: result.items.map((item) => this.itemAdapter.adapt(item)),
      total: result.total,
      page: result.page,
      perPage: result.perPage,
    };
  }

  adaptSuccess(data: SearchResult<T>): CommerceResponse<SearchResult<R>> {
    return {
      success: true,
      data: this.adapt(data),
      error: null,
    };
  }

  adaptError(
    error: DomainError,
    fallback?: SearchResult<R>,
  ): CommerceResponse<SearchResult<R>> {
    return {
      success: false,
      data: fallback || {
        items: [],
        total: 0,
        page: 1,
        perPage: 20,
      },
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }
}
