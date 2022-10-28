import { DbSaveFilmsFromApi } from "@/data/use-cases";
import { SaveFilmsFromApi } from "@/domain/features";
import { makeFilmsRepository } from "@/main/factories/infra/database";
import { makeAxiosAdapter } from "@/main/factories/infra/http";

export const makeSaveFilmsFromApi = (): SaveFilmsFromApi => {
  const axiosAdapter = makeAxiosAdapter();
  const saveFilmsFromApiRepository = makeFilmsRepository();
  return new DbSaveFilmsFromApi(axiosAdapter, saveFilmsFromApiRepository);
};
