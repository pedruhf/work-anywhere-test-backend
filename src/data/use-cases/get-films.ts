import { Film } from "@/domain/models";
import { GetFilmsRepository } from "@/data/contracts";

export class GetFilms {
  constructor(private readonly getFilmsRepository: GetFilmsRepository) {}

  async execute(): Promise<Film[]> {
    const films = await this.getFilmsRepository.getAll();
    return films;
  }
}
