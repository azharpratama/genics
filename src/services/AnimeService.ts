import { Anime } from "../models/Anime";
import { AnimeRepository } from "../repositories/AnimeRepository";

export class AnimeService {
  private animeRepository: AnimeRepository;

  constructor() {
    this.animeRepository = new AnimeRepository();
  }

  public async getAnimeList(): Promise<Anime[]> {
    return this.animeRepository.getAnimeList();
  }

  public async getAnimeById(id: string): Promise<Anime | null> {
    return this.animeRepository.getAnimeById(id);
  }

  public async addAnime(anime: Anime): Promise<Anime> {
    return this.animeRepository.addAnime(anime);
  }
}
