import {
  Controller,
  SaveFilmsFromApiController,
} from "@/application/controllers";
import { SaveFilmsFromApiStub } from "@/tests/application/mocks";

const makeSut = () => {
  const saveFilmsFromApi = new SaveFilmsFromApiStub();
  const sut = new SaveFilmsFromApiController(saveFilmsFromApi);

  return {
    sut,
    saveFilmsFromApi,
  };
};

describe("SaveFilmsFromApi Controller", () => {
  test("Should extend Controller", async () => {
    const { sut } = makeSut();

    expect(sut).toBeInstanceOf(Controller);
  });

  test("Should call SaveFilmsFromApi use case", async () => {
    const { sut, saveFilmsFromApi } = makeSut();
    const executeSpy = jest.spyOn(saveFilmsFromApi, "execute");
    await sut.perform();

    expect(executeSpy).toBeCalled();
  });

  test("Should rethrow if SaveFilmsFromApi throws", async () => {
    const { sut, saveFilmsFromApi } = makeSut();
    const error = new Error("SaveFilmsFromApi throws");
    jest.spyOn(saveFilmsFromApi, "execute").mockRejectedValueOnce(error);
    const resultPromise = sut.perform();

    await expect(resultPromise).rejects.toThrow(
      new Error("SaveFilmsFromApi throws")
    );
  });

  test("Should return success with message on success", async () => {
    const { sut } = makeSut();
    const result = await sut.perform();

    expect(result).toMatchObject({
      statusCode: 200,
      data: { message: "Dados inseridos com sucesso" },
    });
  });
});
