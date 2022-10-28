import { HttpClient, SaveFilmsFromApiRepository } from "@/data/contracts";
import { SaveFilmsFromApi } from "@/domain/features";
import { Film } from "@/domain/models";

export class DbSaveFilmsFromApi implements SaveFilmsFromApi {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly saveFilmsFromApiRepository: SaveFilmsFromApiRepository
  ) {}

  async execute(): Promise<void> {
    const { data } = await this.httpClient.request<any[]>("/films", "get");
    if (!data) throw new Error("Erro ao buscar films na API");
    const converttedData = data!.map<Film>((film) => ({
      title: film.title,
      director: film.director,
      description: film.description,
      producer: film.producer,
    }));
    await this.saveFilmsFromApiRepository.save(converttedData);
  }
}
