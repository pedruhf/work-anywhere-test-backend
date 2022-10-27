import { GetFilmsController } from "@/application/controllers";

export const makeGetFilmController = (): GetFilmsController => {
  return new GetFilmsController();
};
