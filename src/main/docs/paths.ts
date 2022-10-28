export const filmsGetPath = {
  get: {
    tags: ["Filmes"],
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/filmArray",
            },
          },
        },
      },
    },
    parameters: [
      {
        in: "query",
        name: "page",
        required: false,
        schema: {
          type: "integer",
          minimum: 1,
        },
        description: "Pagina atual da paginação"
      },
      {
        in: "query",
        name: "limit",
        required: false,
        schema: {
          type: "integer",
          minimum: 1,
        },
        description: "Quantidade de dados que virão na paginação"
      }
    ]
  },
};

export const filmsPostPath = {
  post: {
    tags: ["Filmes"],
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/film",
            },
          },
        },
      },
    },
  },
};
