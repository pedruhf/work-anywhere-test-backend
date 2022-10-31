import { GetFilmsRepository, SaveFilmsFromApiInput, SaveFilmsFromApiRepository } from "@/data/contracts";
import { GetFilmsFilterParams, GetFilmsResponse } from "@/domain/features";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsRepositoryStub implements GetFilmsRepository {
  async getAll(filterParams?: GetFilmsFilterParams): Promise<GetFilmsResponse> {
    return Promise.resolve({
      films: getMockedFilmList(),
      totalFilms: getMockedFilmList().length,
    });
  }
}

export class SaveFilmsFromApiRepositoryStub implements SaveFilmsFromApiRepository {
  async save(
    data: SaveFilmsFromApiInput | SaveFilmsFromApiInput[]
  ): Promise<void> {
    return Promise.resolve();
  }
}
