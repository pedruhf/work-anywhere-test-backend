import { Film } from "@/domain/models";

export interface GetFilms {
  execute(): Promise<Film[]>;
}
