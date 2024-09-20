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
class AnimeRepository {
    constructor() {
        this.animeList = [
            {
                id: '1', title: 'One Piece', genre: 'Adventure', episodes: 1120,
                synopsis: 'Pirates seeking adventure'
            },
            {
                id: '2', title: 'Steins;Gate', genre: 'Sci-Fi', episodes: 24,
                synopsis: 'Fun story about time travel'
            }
        ];
    }
    getAnimeList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.animeList;
        });
    }
    getAnimeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const anime = this.animeList.find(a => a.id === id);
            return anime ? anime : null;
        });
    }
    addAnime(anime) {
        return __awaiter(this, void 0, void 0, function* () {
            this.animeList.push(anime);
            return anime;
        });
    }
}
exports.AnimeRepository = AnimeRepository;
