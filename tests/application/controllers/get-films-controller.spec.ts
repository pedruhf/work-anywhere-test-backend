import { GetFilms } from "@/domain/features";
import { Film } from "@/domain/models";

export class GetFilmsController {
  constructor(private readonly getFilms: GetFilms) {}

  async handle(): Promise<any> {
    try {
      await this.getFilms.execute();
    } catch (error) {
      return serverError(<Error>error);
    }
  }
}

export class GetFilmsStub implements GetFilms {
  async execute(): Promise<Film[]> {
    return Promise.resolve([]);
  }
}

const serverError = (error: Error) => {
  return {
    statusCode: 500,
    data: {
      message: error.message,
    },
  };
};

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

  test("Should return serverError if getFilms throws", async () => {
    const { sut, getFilmsStub } = makeSut();
    const error = new Error("getFilms throws");
    jest.spyOn(getFilmsStub, "execute").mockRejectedValueOnce(error);
    const result = await sut.handle();

    expect(result).toMatchObject({
      statusCode: 500,
      data: {
        message: "getFilms throws",
      },
    });
  });
});
