import { GetFilms } from "@/data/use-cases";
import { GetFilmsRepositorySpy } from "@/tests/data/mocks";

const makeSut = () => {
  const getFilmsRepositorySpy = new GetFilmsRepositorySpy();
  const sut = new GetFilms(getFilmsRepositorySpy);
  return {
    sut,
    getFilmsRepositorySpy,
  };
};

describe("GetFilms Use Case", () => {
  test("Should call getFilmsRepository", async () => {
    const { sut, getFilmsRepositorySpy } = makeSut();
    const getAllSpy = jest.spyOn(getFilmsRepositorySpy, "getAll");
    await sut.execute();

    expect(getAllSpy).toHaveBeenCalled();
  });

  test("Should return a list of films on success", async () => {
    const { sut } = makeSut();
    const result = await sut.execute();

    expect(result).toEqual([
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
  });

  test("Should rethrow if getFilmsRepository throws", async () => {
    const { sut, getFilmsRepositorySpy } = makeSut();
    jest.spyOn(getFilmsRepositorySpy, "getAll").mockRejectedValueOnce(new Error("getAll throws"));
    const resultPromise = sut.execute();

    await expect(resultPromise).rejects.toThrow(new Error("getAll throws"));
  });
});
