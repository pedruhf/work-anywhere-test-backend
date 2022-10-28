import { Film } from "@/domain/models";
import { GetFilmsRepository } from "@/data/contracts";
import { GetFilms, GetFilmsFilterParams } from "@/domain/features";

export class DbGetFilms implements GetFilms {
  constructor(private readonly getFilmsRepository: GetFilmsRepository) {}

  async execute(filterParams?: GetFilmsFilterParams): Promise<Film[]> {
    const films = await this.getFilmsRepository.getAll(filterParams);
    return films;
  }
}
