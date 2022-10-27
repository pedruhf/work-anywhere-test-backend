import { Controller, GetFilmsController } from "@/application/controllers";
import { HttpResponse, serverError, success } from "@/application/helpers";

class ControllerStub extends Controller {
  async perform(): Promise<HttpResponse> {
    try {
      return success("any_response");
    } catch (error) {
      return serverError(<Error>error);
    }
  }
}

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
