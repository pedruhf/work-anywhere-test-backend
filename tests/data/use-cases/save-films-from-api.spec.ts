import { HttpResponse } from "@/application/helpers";
import { SaveFilmsFromApi } from "@/data/use-cases";
import { SaveFilmsFromApiRepositoryStub } from "@/tests/data/mocks";
import { HttpClientStub } from "@/tests/data/mocks";

const makeSut = () => {
  const httpClientStub = new HttpClientStub();
  const saveFilmsFromApiRepositoryStub = new SaveFilmsFromApiRepositoryStub();
  const sut = new SaveFilmsFromApi(
    httpClientStub,
    saveFilmsFromApiRepositoryStub
  );
  return {
    sut,
    httpClientStub,
    saveFilmsFromApiRepositoryStub,
  };
};

describe("SaveFilmsFromApi Use Case", () => {
  test("Should call httpClient with correct input", async () => {
    const { sut, httpClientStub } = makeSut();
    const requestSpy = jest.spyOn(httpClientStub, "request");
    await sut.execute();

    expect(requestSpy).toHaveBeenCalledWith("any_url", "get");
  });

  test("Should call httpClient with correct input", async () => {
    const { sut, httpClientStub, saveFilmsFromApiRepositoryStub } = makeSut();
    const mockedHttpResponse: HttpResponse = {
      statusCode: 200,
      data: [
        {
          title: "any_title_1",
          description: "any_description_1",
          director: "any_director_1",
          producer: "any_producer_1",
        },
        {
          title: "any_title_2",
          description: "any_description_2",
          director: "any_director_2",
          producer: "any_producer_2",
        },
      ],
    };
    jest
      .spyOn(httpClientStub, "request")
      .mockResolvedValueOnce(mockedHttpResponse);
    const saveSpy = jest.spyOn(saveFilmsFromApiRepositoryStub, "save");
    await sut.execute();

    expect(saveSpy).toHaveBeenCalledWith(mockedHttpResponse.data);
  });

  test("Should rethrow if httpClient throws", async () => {
    const { sut, httpClientStub } = makeSut();
    jest
      .spyOn(httpClientStub, "request")
      .mockRejectedValueOnce(new Error("request throws"));
    const resultPromise = sut.execute();

    await expect(resultPromise).rejects.toThrow(new Error("request throws"));
  });

  test("Should rethrow if saveFilmsFromApiRepository throws", async () => {
    const { sut, saveFilmsFromApiRepositoryStub } = makeSut();
    jest
      .spyOn(saveFilmsFromApiRepositoryStub, "save")
      .mockRejectedValueOnce(new Error("save throws"));
    const resultPromise = sut.execute();

    await expect(resultPromise).rejects.toThrow(new Error("save throws"));
  });
});
