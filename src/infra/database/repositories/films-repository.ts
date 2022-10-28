import { Film } from "@/domain/models";
import {
  GetFilmsRepository,
  SaveFilmsFromApiInput,
  SaveFilmsFromApiRepository,
} from "@/data/contracts";
import { PgConnection } from "@/infra/database/postgres";
import { PgFilm } from "@/infra/database/postgres/entities";
import { GetFilmsFilterParams } from "@/domain/features";

export class FilmsRepository
  implements GetFilmsRepository, SaveFilmsFromApiRepository
{
  constructor(
    private readonly connection: PgConnection = PgConnection.getInstance()
  ) {}

  async getAll(filterParams?: GetFilmsFilterParams): Promise<Film[]> {
    const pgFilmRepository = this.connection.getRepository(PgFilm);
    let skip: number;
    if (!filterParams) {
      skip = 0;
    } else {
      skip = (filterParams.page - 1) * filterParams.limit;
    }

    const [pgFilms] = await pgFilmRepository.findAndCount({
      skip: skip || 0,
      take: filterParams?.limit || 10,
    });
    return pgFilms;
  }

  async save(data: SaveFilmsFromApiInput[]): Promise<void> {
    const pgFilmRepository = this.connection.getRepository(PgFilm);
    await pgFilmRepository.save(data);
  }
}
