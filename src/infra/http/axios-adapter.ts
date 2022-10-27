import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { HttpResponse } from "@/application/helpers";
import { HttpClient, HttpMethods } from "@/data/contracts";

export class AxiosAdapter implements HttpClient {
  private httpClient: AxiosInstance;
  constructor () {
    this.httpClient = axios.create({
      baseURL: "https://ghibliapi.herokuapp.com",
    });
    // this.httpClient.interceptors.request.use()
  }

  async request<T = any>(url: string, method: HttpMethods, options?: AxiosRequestConfig): Promise<HttpResponse> {
    const result = await this.httpClient.request<T>({
      url,
      method,
      ...options,
    });

    return {
      statusCode: result.status,
      data: result.data,
    };
  }
}
