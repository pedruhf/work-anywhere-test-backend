import { Film } from "@/domain/models";

export type GetFilmsFilterParams = {
  limit: number;
  page: number;
}

export type GetFilmsResponse = {
  films: Film[];
  totalFilms: number;
}

export interface GetFilms {
  execute(filterParams?: GetFilmsFilterParams): Promise<GetFilmsResponse>;
}
