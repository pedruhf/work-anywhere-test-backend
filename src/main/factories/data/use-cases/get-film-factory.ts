import { GetFilms } from "@/data/use-cases";
import { makeFilmsRepository } from "@/main/factories/infra/database";

export const makeGetFilm = (): GetFilms => {
  const filmsRepository = makeFilmsRepository();
  return new GetFilms(filmsRepository);
};
