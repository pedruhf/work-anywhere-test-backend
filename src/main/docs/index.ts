import { filmsPath } from "./paths";
import { filmsSchema } from "./schemas";

export default {
  "openapi": "3.0.0",
  "info": {
    "title": "API de gerenciamentos de filmes catalogados",
    "description": "Serviço desenvolvido para a Work Anywhere",
    "contact": "pedroh.ufrn@gmail.com"
  },
  "version": "1.0.0",
  servers: [{
    url: "/api"
  }],
  tags: [{
    name: "Filmes"
  }],
  paths: {
    "/films": filmsPath
  },
  schemas: {
    film: filmsSchema,
  }
}
