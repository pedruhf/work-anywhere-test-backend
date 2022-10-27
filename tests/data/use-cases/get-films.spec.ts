import { GetFilms } from "@/data/use-cases";
import { GetFilmsRepositoryStub } from "@/tests/data/mocks";

const makeSut = () => {
  const getFilmsRepositoryStub = new GetFilmsRepositoryStub();
  const sut = new GetFilms(getFilmsRepositoryStub);
  return {
    sut,
    getFilmsRepositoryStub,
  };
};

describe("GetFilms Use Case", () => {
  test("Should call getFilmsRepository", async () => {
    const { sut, getFilmsRepositoryStub } = makeSut();
    const getAllSpy = jest.spyOn(getFilmsRepositoryStub, "getAll");
    await sut.execute();

    expect(getAllSpy).toHaveBeenCalled();
  });

  test("Should return a list of films on success", async () => {
    const { sut } = makeSut();
    const result = await sut.execute();

    expect(result).toEqual([
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
    ]);
  });

  test("Should rethrow if getFilmsRepository throws", async () => {
    const { sut, getFilmsRepositoryStub } = makeSut();
    jest.spyOn(getFilmsRepositoryStub, "getAll").mockRejectedValueOnce(new Error("getAll throws"));
    const resultPromise = sut.execute();

    await expect(resultPromise).rejects.toThrow(new Error("getAll throws"));
  });
});
