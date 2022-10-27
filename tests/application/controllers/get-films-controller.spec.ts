import { GetFilms } from "@/domain/features";
import { Film } from "@/domain/models";

export class GetFilmsController {
  constructor (private readonly getFilms: GetFilms) {}

  async handle(): Promise<void> {
    await this.getFilms.execute();
  }
}

export class GetFilmsStub implements GetFilms {
  async execute(): Promise<Film[]> {
    return Promise.resolve([]);
  }
}

const makeSut = () => {
  const getFilmsStub = new GetFilmsStub();
  const sut = new GetFilmsController(getFilmsStub);

  return {
    sut,
    getFilmsStub,
  };
};

describe("GetFilms Controller", () => {
  test("Should call getFilms use case", async () => {
    const { sut, getFilmsStub } = makeSut();
    const executeSpy = jest.spyOn(getFilmsStub, "execute");
    await sut.handle();

    expect(executeSpy).toBeCalled();
  });
});
