import { Controller, GetFilmsController } from "@/application/controllers";
import { GetFilmsStub } from "@/tests/application/mocks";

const makeSut = () => {
  const getFilmsStub = new GetFilmsStub();
  const sut = new GetFilmsController(getFilmsStub);

  return {
    sut,
    getFilmsStub,
  };
};

describe("GetFilms Controller", () => {
  test("Should extend Controller", async () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(Controller);
  });

  test("Should call getFilms use case", async () => {
    const { sut, getFilmsStub } = makeSut();
    const executeSpy = jest.spyOn(getFilmsStub, "execute");
    await sut.perform();

    expect(executeSpy).toBeCalled();
  });

  test("Should rethrow if getFilms throws", async () => {
    const { sut, getFilmsStub } = makeSut();
    const error = new Error("getFilms throws");
    jest.spyOn(getFilmsStub, "execute").mockRejectedValueOnce(error);
    const resultPromise = sut.perform();

    await expect(resultPromise).rejects.toThrow(new Error("getFilms throws"));
  });

  test("Should return success with data on success", async () => {
    const { sut } = makeSut();
    const result = await sut.perform();

    expect(result).toMatchObject({
      statusCode: 200,
      data: [
        {
          id: 1,
          title: "any_title_1",
          description: "any_description_1",
          director: "any_director_1",
          producer: "any_producer_1",
        },
        {
          id: 2,
          title: "any_title_2",
          description: "any_description_2",
          director: "any_director_2",
          producer: "any_producer_2",
        },
      ],
    });
  });
});
