import { Controller } from "@/application/controllers";
import { HttpResponse, serverError, success } from "@/application/helpers";
import { GetFilms, SaveFilmsFromApi } from "@/domain/features";
import { Film } from "@/domain/models";
import { getMockedFilmList } from "@/tests/domain/mocks";

export class GetFilmsStub implements GetFilms {
  async execute(): Promise<Film[]> {
    return Promise.resolve(getMockedFilmList());
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
