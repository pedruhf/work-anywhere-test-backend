import { GetFilms } from "@/domain/features";
import { HttpResponse, serverError, success } from "@/application/helpers";

export class GetFilmsController {
  constructor(private readonly getFilms: GetFilms) {}

  async handle(): Promise<HttpResponse> {
    try {
      const response = await this.getFilms.execute();
      return success(response);
    } catch (error) {
      return serverError(<Error>error);
    }
  }
}
