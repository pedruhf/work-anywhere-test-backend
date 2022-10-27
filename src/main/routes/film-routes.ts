import { Router } from "express";

import { expressAdapter } from "@/main/adapters";
import { makeGetFilmController, makeSaveFilmsFromApiController } from "@/main/factories/application/controllers";

export default (router: Router): void => {
  router.get("/films", expressAdapter(makeGetFilmController()));
  router.post("/save-films-from-api", expressAdapter(makeSaveFilmsFromApiController()));
};
