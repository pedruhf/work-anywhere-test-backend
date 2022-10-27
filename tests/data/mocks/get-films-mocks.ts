import { GetFilmsRepository } from "@/data/contracts";
import { Film } from "@/domain/models";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsRepositoryStub implements GetFilmsRepository {
  async getAll(): Promise<Film[]> {
    return Promise.resolve(getMockedFilmList());
  }
}
