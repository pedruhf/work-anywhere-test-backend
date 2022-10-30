import { Film } from "@/domain/models";
import { GetFilmsRepository } from "@/data/contracts";
import { GetFilms, GetFilmsFilterParams, GetFilmsResponse } from "@/domain/features";

export class DbGetFilms implements GetFilms {
  constructor(private readonly getFilmsRepository: GetFilmsRepository) {}

  async execute(filterParams?: GetFilmsFilterParams): Promise<GetFilmsResponse> {
    const data = await this.getFilmsRepository.getAll(filterParams);
    return data;
  }
}
