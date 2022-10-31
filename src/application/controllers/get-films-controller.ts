import { Film } from "@/domain/models";
import { GetFilms, GetFilmsResponse } from "@/domain/features";
import { Controller } from "@/application/controllers";
import { HttpResponse, success } from "@/application/helpers";

export class GetFilmsController extends Controller {
  constructor(private readonly getFilms: GetFilms) {
    super();
  }

  async perform(httpRequest?: any): Promise<HttpResponse<GetFilmsResponse>> {
    let response: GetFilmsResponse;
    if (httpRequest?.query) {
      const { limit, page } = httpRequest?.query;
      response = await this.getFilms.execute({ limit, page });
    } else {
      response = await this.getFilms.execute();
    }
    return success(response);
  }
}
