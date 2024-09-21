"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AnimeRepository {
    getAnimeList() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.anime.findMany();
        });
    }
    getAnimeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.anime.findUnique({
                where: { id },
            });
        });
    }
    addAnime(anime) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.anime.create({
                data: Object.assign({}, anime),
            });
        });
    }
}
exports.AnimeRepository = AnimeRepository;
