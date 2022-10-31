import { Controller } from "@/application/controllers";
import { HttpResponse, serverError, success } from "@/application/helpers";
import { GetFilms, GetFilmsFilterParams, GetFilmsResponse, SaveFilmsFromApi } from "@/domain/features";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsStub implements GetFilms {
  async execute(filterParams?: GetFilmsFilterParams): Promise<GetFilmsResponse> {
    return Promise.resolve({
      films: getMockedFilmList(),
      totalFilms: getMockedFilmList().length,
    });
  }
}

export class ControllerStub extends Controller {
  async perform(): Promise<HttpResponse> {
    try {
      return success("any_response");
    } catch (error) {
      return serverError(<Error>error);
    }
  }
}

export class SaveFilmsFromApiStub implements SaveFilmsFromApi {
  async execute(): Promise<void> {
    return Promise.resolve();
  }
}
