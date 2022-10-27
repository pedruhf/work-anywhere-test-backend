import { GetFilmsController } from "@/application/controllers";
import { makeGetFilm } from "@/main/factories/data/use-cases";

export const makeGetFilmController = (): GetFilmsController => {
  const getFilmsUseCase = makeGetFilm()
  return new GetFilmsController(getFilmsUseCase);
};
