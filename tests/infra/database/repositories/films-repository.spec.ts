import { Connection, Repository } from "typeorm";

import { PgFilm } from "@/infra/database/postgres/entities";
import { dbTestConnection } from "@/tests/infra/mocks";
import { FilmsRepository } from "@/infra/database/repositories";

describe("Films Repository", () => {
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

  describe("getAll", () => {
    test("Should return a list of films", async () => {
      await PgFilmRepository.save({
        title: "any_title",
        description: "any_description",
        bannerUrl: "any_url",
        director: "any_director",
        producer: "any_producer",
      });
      const result = await sut.getAll();

      expect(result).toMatchObject([
        {
          title: "any_title",
          description: "any_description",
          bannerUrl: "any_url",
          director: "any_director",
          producer: "any_producer",
        },
      ]);
    });
  });

  describe("save", () => {
    test("Should save a list of films", async () => {
      const filmsData = [
        {
          title: "any_title_1",
          description: "any_description_1",
          bannerUrl: "any_url_1",
          director: "any_director_1",
          producer: "any_producer_1",
        },
        {
          title: "any_title_2",
          description: "any_description_2",
          bannerUrl: "any_url_2",
          director: "any_director_2",
          producer: "any_producer_2",
        }
      ];
      await sut.save(filmsData);
      const films = await sut.getAll();

      expect(films).toMatchObject(filmsData);
    });
  });
});
