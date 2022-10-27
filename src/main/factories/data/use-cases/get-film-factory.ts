import { GetFilms } from "@/data/use-cases";

export const makeGetFilm = (): GetFilms => {
  return new GetFilms();
};
