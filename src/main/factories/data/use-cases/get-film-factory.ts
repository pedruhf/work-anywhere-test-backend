import { DbGetFilms } from "@/data/use-cases";
import { GetFilms } from "@/domain/features";
import { makeFilmsRepository } from "@/main/factories/infra/database";

export const makeGetFilm = (): GetFilms => {
  const filmsRepository = makeFilmsRepository();
  return new DbGetFilms(filmsRepository);
};
