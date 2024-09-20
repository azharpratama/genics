import { Anime } from "../models/Anime";

export class AnimeRepository {
  private animeList: Anime[] = [
    {
      id: '1', title: 'One Piece', genre: 'Adventure', episodes: 1120,
      synopsis: 'Pirates seeking adventure'
    },
    {
      id: '2', title: 'Steins;Gate', genre: 'Sci-Fi', episodes: 24,
      synopsis: 'Fun story about time travel'
    }
  ];

  public async getAnimeList(): Promise<Anime[]> {
    return this.animeList;
  }

  public async getAnimeById(id: string): Promise<Anime | null> {
    const anime = this.animeList.find(a => a.id === id);
    return anime ? anime : null;
  }

  public async addAnime(anime: Anime): Promise<Anime> {
    this.animeList.push(anime);
    return anime;
  }
}
