import {
  Controller,
  SaveFilmsFromApiController,
} from "@/application/controllers";
import { makeSaveFilmsFromApi } from "@/main/factories/data/use-cases";

export const makeSaveFilmsFromApiController = (): Controller => {
  const saveFilmsFromApi = makeSaveFilmsFromApi();
  return new SaveFilmsFromApiController(saveFilmsFromApi);
};
