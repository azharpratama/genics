import { PrismaClient } from '@prisma/client';
import { Anime } from '../models/Anime';

const prisma = new PrismaClient();

export class AnimeRepository {
  public async getAnimeList() {
    return prisma.anime.findMany();
  }

  public async getAnimeById(id: string) {
    return prisma.anime.findUnique({
      where: { id },
    });
  }

  public async addAnime(anime: Omit<Anime, 'id'>) {
    return prisma.anime.create({
      data: {
        ...anime,
      },
    });
  }
}
