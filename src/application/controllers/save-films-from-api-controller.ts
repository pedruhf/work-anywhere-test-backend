import { Controller } from "@/application/controllers";
import { SaveFilmsFromApi } from "@/domain/features";
import { HttpResponse, success } from "@/application/helpers";

export class SaveFilmsFromApiController extends Controller {
  constructor(private readonly saveFilmsFromApi: SaveFilmsFromApi) {
    super();
  }

  async perform(): Promise<HttpResponse> {
    await this.saveFilmsFromApi.execute();
    return success({ message: "Dados inseridos com sucesso" });
  }
}
