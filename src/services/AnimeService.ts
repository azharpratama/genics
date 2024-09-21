import { Anime } from "../models/Anime";
import { AnimeRepository } from "../repositories/AnimeRepository";

export class AnimeService {
  private animeRepository: AnimeRepository;

  constructor() {
    this.animeRepository = new AnimeRepository();
  }

  public async getAnimeList() {
    return this.animeRepository.getAnimeList();
  }

  public async getAnimeById(id: string) {
    return this.animeRepository.getAnimeById(id);
  }

  public async addAnime(anime: Anime) {
    return this.animeRepository.addAnime(anime);
  }
}
