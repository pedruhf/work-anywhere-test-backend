import { Film } from "@/domain/models";

export class GetFilms {
  constructor (private readonly getFilmsRepository: GetFilmsRepository) {}

  async execute(): Promise<void> {
    await this.getFilmsRepository.getAll();
    return Promise.resolve();
  }
}

export interface GetFilmsRepository {
  getAll(): Promise<Film[]>;
}

export class GetFilmsRepositorySpy implements GetFilmsRepository {
  async getAll(): Promise<Film[]> {
    return Promise.resolve([]);
  }
}

const makeSut = () => {
  const getFilmsRepositorySpy = new GetFilmsRepositorySpy();
  const sut = new GetFilms(getFilmsRepositorySpy);
  return {
    sut,
    getFilmsRepositorySpy,
  }
}

describe("GetFilms Use Case", () => {
  test("Should call getFilmsRepository", async () => {
    const { sut, getFilmsRepositorySpy } = makeSut();
    const getAllSpy = jest.spyOn(getFilmsRepositorySpy, "getAll");
    await sut.execute();

    expect(getAllSpy).toHaveBeenCalled();
  });
});
