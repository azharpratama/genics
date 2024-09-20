import { Request, Response } from "express";
import { AnimeService } from "../services/AnimeService";

export class AnimeController {
  private animeService: AnimeService;

  constructor() {
    this.animeService = new AnimeService;
  }

  public async getAnimeList(req: Request, res: Response): Promise<void> {
    try {
      const animeList = await this.animeService.getAnimeList();
      res.status(200).json(animeList);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occured' });
      }
    }
  }

  public async getAnimeById(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    try {
      const anime = await this.animeService.getAnimeById(id);
      if (anime) {
        res.status(200).json(anime);
      } else {
        res.status(404).json({ message: 'Anime not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occured' });
      }
    }
  }

  public async addAnime(req: Request, res: Response): Promise<void> {
    const { title, genre, episodes, synopsis } = req.body;
    try {
      const newAnime = await this.animeService.addAnime({
        id: new Date().getTime().toString(),
        title,
        genre,
        episodes,
        synopsis
      });
      res.status(201).json(newAnime);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occured' });
      }
    }
  }
}
