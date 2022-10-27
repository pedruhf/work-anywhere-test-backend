import { HttpResponse } from "@/application/helpers";

export type HttpMethods = "get" | "post" | "put" | "delete";

export interface HttpClient {
  request(url: string, method: HttpMethods, options: Record<string, unknown>): Promise<HttpResponse>;
}
