import { GetFilmsRepository, SaveFilmsFromApiInput, SaveFilmsFromApiRepository } from "@/data/contracts";
import { Film } from "@/domain/models";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsRepositoryStub implements GetFilmsRepository {
  async getAll(): Promise<Film[]> {
    return Promise.resolve(getMockedFilmList());
  }
}

export class SaveFilmsFromApiRepositoryStub implements SaveFilmsFromApiRepository {
  async save(
    data: SaveFilmsFromApiInput | SaveFilmsFromApiInput[]
  ): Promise<void> {
    return Promise.resolve();
  }
}
