import { HttpResponse } from "@/application/helpers";
import { HttpClient, HttpMethods } from "@/data/contracts";

export class HttpClientStub implements HttpClient {
  request(
    url: string,
    method: HttpMethods,
    options?: Record<string, unknown>
  ): Promise<HttpResponse<any>> {
    return Promise.resolve({
      statusCode: 200,
    });
  }
}
