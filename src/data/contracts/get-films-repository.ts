import { GetFilmsFilterParams, GetFilmsResponse } from "@/domain/features";

export interface GetFilmsRepository {
  getAll(filterParams?: GetFilmsFilterParams): Promise<GetFilmsResponse>;
}
