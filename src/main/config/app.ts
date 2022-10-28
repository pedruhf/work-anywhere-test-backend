import express from "express";

import { setupSwagger } from "@/main/config/setup-swagger";
import { setupMiddlewares } from "@/main/config/setup-middlewares";
import { setupRoutes } from "@/main/config/setup-routes";

const app = express();
setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);

export { app };
