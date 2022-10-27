import { HttpClient, SaveFilmsFromApiRepository } from "@/data/contracts";

export class SaveFilmsFromApi {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly saveFilmsFromApiRepository: SaveFilmsFromApiRepository
  ) {}

  async execute(): Promise<void> {
    const { data } = await this.httpClient.request("any_url", "get");
    await this.saveFilmsFromApiRepository.save(data);
  }
}
