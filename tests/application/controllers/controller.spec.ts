import { ControllerStub } from "@/tests/application/mocks";

const makeSut = () => {
  const sut = new ControllerStub();
  return { sut };
};

describe("Controller", () => {
  test("Should return the same response of Controller", async () => {
    const { sut } = makeSut();
    const result = await sut.perform();
    expect(result).toEqual({
      statusCode: 200,
      data: "any_response",
    });
  });

  test("Should return serverError if perform throws", async () => {
    const error = new Error("perform error");
    const { sut } = makeSut();
    jest.spyOn(sut, "perform").mockRejectedValueOnce(error);
    const result = await sut.handle();

    expect(result).toEqual({
      statusCode: 500,
      data: {
        message: "perform error",
      },
    });
  });
});
