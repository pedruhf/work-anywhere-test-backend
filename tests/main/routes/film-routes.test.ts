import { Connection, Repository } from "typeorm";

import request from "supertest";
import { app } from "@/main/config";
import { PgFilm } from "@/infra/database/postgres/entities";
import { FilmsRepository } from "@/infra/database/repositories";
import { dbTestConnection } from "@/tests/infra/mocks";

describe("Films Routes", () => {
  let connection: Connection;
  let PgFilmRepository: Repository<PgFilm>;
  let sut: FilmsRepository;

  beforeAll(async () => {
    connection = await dbTestConnection();
  });

  beforeEach(async () => {
    sut = new FilmsRepository(connection as any);
    PgFilmRepository = connection.getRepository(PgFilm);
  });

  afterEach(async () => {
    PgFilmRepository.clear();
  });

  describe("GET /films", () => {
    test("Should return a list of films", async () => {
      await PgFilmRepository.save({
        id: 1,
        title: "any_title",
        description: "any_description",
        director: "any_director",
        producer: "any_producer",
      });
      const { statusCode, body } = await request(app).get("/api/films");

      expect(statusCode).toBe(200);
      expect(body[0].id).toBeDefined();
      expect(body[0]).toMatchObject({
        title: "any_title",
        description: "any_description",
        director: "any_director",
        producer: "any_producer",
      });
    });
  });
});
