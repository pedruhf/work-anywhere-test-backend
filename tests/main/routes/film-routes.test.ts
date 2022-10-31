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
    await PgFilmRepository.clear();
  });

  afterEach(async () => {
    await PgFilmRepository.clear();
  });

  describe("GET /films", () => {
    test("Should return a list of films", async () => {
      await PgFilmRepository.save({
        id: 1,
        title: "any_title",
        description: "any_description",
        bannerUrl: "any_url_1",
        director: "any_director",
        producer: "any_producer",
      });
      const { statusCode, body } = await request(app).get("/api/films");

      expect(statusCode).toBe(200);
      expect(body.films.length).toBe(1);
      expect(body.films[0].id).toBeDefined();
      expect(body.films[0]).toMatchObject({
        title: "any_title",
        description: "any_description",
        bannerUrl: "any_url_1",
        director: "any_director",
        producer: "any_producer",
      });
    });
  });

  describe("GET /save-films-from-api", () => {
    test("Should save a list of films", async () => {
      const { statusCode, body } = await request(app).post("/api/save-films-from-api");

      expect(statusCode).toBe(200);
      expect(body).toMatchObject({ message: 'Dados inseridos com sucesso' });
    });
  });
});
