import { GetFilmsRepository } from "@/data/contracts";
import { Film } from "@/domain/models";

export class GetFilmsRepositorySpy implements GetFilmsRepository {
  async getAll(): Promise<Film[]> {
    return Promise.resolve(getMockedFilmList());
  }
}

export const getMockedFilmList = (): Film[] => ([
  {
    id: "any_id_1",
    title: "any_title_1",
    description: "any_description_1",
    director: "any_director_1",
    producer: "any_producer_1",
  },
  {
    id: "any_id_2",
    title: "any_title_2",
    description: "any_description_2",
    director: "any_director_2",
    producer: "any_producer_2",
  },
]);
