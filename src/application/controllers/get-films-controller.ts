import { Film } from "@/domain/models";
import { GetFilms } from "@/domain/features";
import { Controller } from "@/application/controllers";
import { HttpResponse, success } from "@/application/helpers";

export class GetFilmsController extends Controller {
  constructor(private readonly getFilms: GetFilms) {
    super();
  }

  async perform(): Promise<HttpResponse<Film[]>> {
    const response = await this.getFilms.execute();
    return success(response);
  }
}
