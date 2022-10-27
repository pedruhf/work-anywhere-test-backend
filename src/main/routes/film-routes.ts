import { Router } from "express";

import { expressAdapter } from "@/main/adapters";
import { makeGetFilmController } from "@/main/factories/application/controllers";

export default (router: Router): void => {
  router.get("/films", expressAdapter(makeGetFilmController()));
};
