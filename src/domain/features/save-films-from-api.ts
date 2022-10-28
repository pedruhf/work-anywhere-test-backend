import { Film } from "@/domain/models";

export type GetFilmsFilterParams = {
  limit: number;
  page: number;
}

export interface GetFilms {
  execute(filterParams?: GetFilmsFilterParams): Promise<Film[]>;
}
