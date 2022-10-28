export const filmSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    director: {
      type: "string",
    },
    producer: {
      type: "string",
    },
  },
};

export const filmArraySchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "integer",
      },
      title: {
        type: "string",
      },
      description: {
        type: "string",
      },
      director: {
        type: "string",
      },
      producer: {
        type: "string",
      },
    },
  },
};
