import { HttpResponse, serverError } from "../helpers";

export abstract class Controller {
  abstract perform(httpRequest: any): Promise<HttpResponse>;

  async handle(httpRequest?: any): Promise<HttpResponse> {
    try {
      const response = await this.perform(httpRequest);
      return response;
    } catch (error) {
      return serverError(<Error>error);
    }
  }
}
