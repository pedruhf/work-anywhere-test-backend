import { GetFilms } from "@/domain/features";
import { Film } from "@/domain/models";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsStub implements GetFilms {
  async execute(): Promise<Film[]> {
    return Promise.resolve(getMockedFilmList());
  }
}
