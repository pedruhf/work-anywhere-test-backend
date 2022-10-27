export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  serverError = 500,
}

export const success = <T = any>(data?: T): HttpResponse<T> => ({
  statusCode: HttpStatusCode.ok,
  data,
});

export const serverError = (error: Error): HttpResponse<{ message: string }> => ({
  statusCode: HttpStatusCode.serverError,
  data: {
    message: error.message,
  },
});
