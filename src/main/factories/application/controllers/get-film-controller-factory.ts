import { Controller, GetFilmsController } from "@/application/controllers";
import { makeGetFilm } from "@/main/factories/data/use-cases";

export const makeGetFilmController = (): Controller => {
  const getFilmsUseCase = makeGetFilm()
  return new GetFilmsController(getFilmsUseCase);
};
