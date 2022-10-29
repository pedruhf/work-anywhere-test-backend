export type SaveFilmsFromApiInput = {
  title: string;
  description: string;
  bannerUrl: string;
  director: string;
  producer: string;
}

export interface SaveFilmsFromApiRepository {
  save(data: SaveFilmsFromApiInput[]): Promise<void>;
}
