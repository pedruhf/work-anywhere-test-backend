import { Film } from "@/domain/models";
import { GetFilmsRepository, SaveFilmsFromApiInput, SaveFilmsFromApiRepository } from "@/data/contracts";
import { PgConnection } from "@/infra/database/postgres";
import { PgFilm } from "@/infra/database/postgres/entities";

export class FilmsRepository implements GetFilmsRepository, SaveFilmsFromApiRepository {
  constructor(
    private readonly connection: PgConnection = PgConnection.getInstance()
  ) {}

  async getAll(): Promise<Film[]> {
    const pgFilmRepository = this.connection.getRepository(PgFilm);
    const pgFilms = await pgFilmRepository.find();
    return pgFilms;
  }

  async save(data: SaveFilmsFromApiInput[]): Promise<void> {
    const pgFilmRepository = this.connection.getRepository(PgFilm);
    await pgFilmRepository.save(data);
  }
}
