import { HttpClient } from "@/data/contracts";
import { AxiosAdapter } from "@/infra/http";

export const makeAxiosAdapter = (): HttpClient => {
  return new AxiosAdapter();
};
