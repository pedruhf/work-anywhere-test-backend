export const filmsPath = {
  get: {
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
