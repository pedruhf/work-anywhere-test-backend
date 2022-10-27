import { Connection, Repository } from "typeorm";

import { PgConnection } from "@/infra/database/postgres";
import { PgFilm } from "@/infra/database/postgres/entities";
import { GetFilmsRepository } from "@/data/contracts";
import { Film } from "@/domain/models";
import { dbTestConnection } from "../../mocks";

export class FilmsRepository implements GetFilmsRepository {
  constructor(
    private readonly connection: PgConnection = PgConnection.getInstance()
  ) {}

  async getAll(): Promise<Film[]> {
    const pgFilmRepository = this.connection.getRepository(PgFilm);
    const pgFilms = await pgFilmRepository.find();
    return pgFilms;
  }
}

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
  });

  afterEach(async () => {
    PgFilmRepository.clear();
  });

  describe("getAll", () => {
    test("Should return a list of films", async () => {
      await PgFilmRepository.save({
        id: 1,
        title: "any_title",
        description: "any_description",
        director: "any_director",
        producer: "any_producer",
      });
      const result = await sut.getAll();

      expect(result).toMatchObject([{
        title: "any_title",
        description: "any_description",
        director: "any_director",
        producer: "any_producer",
      }]);
    });
  });
});
