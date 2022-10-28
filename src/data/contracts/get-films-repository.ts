import { GetFilmsFilterParams } from "@/domain/features";
import { Film } from "@/domain/models";

export interface GetFilmsRepository {
  getAll(filterParams?: GetFilmsFilterParams): Promise<Film[]>;
}
