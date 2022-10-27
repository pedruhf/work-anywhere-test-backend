import { FilmsRepository } from "@/infra/database/repositories";

export const makeFilmsRepository = (): FilmsRepository => {
  return new FilmsRepository();
};
