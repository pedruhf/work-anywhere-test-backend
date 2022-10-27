import { Film } from "@/domain/models";

export interface GetFilmsRepository {
  getAll(): Promise<Film[]>;
}
