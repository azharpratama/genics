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
exports.AnimeController = void 0;
const AnimeService_1 = require("../services/AnimeService");
class AnimeController {
    constructor() {
        this.animeService = new AnimeService_1.AnimeService;
    }
    getAnimeList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const animeList = yield this.animeService.getAnimeList();
                res.status(200).json(animeList);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error occured' });
                }
            }
        });
    }
    getAnimeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const anime = yield this.animeService.getAnimeById(id);
                if (anime) {
                    res.status(200).json(anime);
                }
                else {
                    res.status(404).json({ message: 'Anime not found' });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error occured' });
                }
            }
        });
    }
    addAnime(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, genre, episodes, synopsis } = req.body;
            try {
                const newAnime = yield this.animeService.addAnime({
                    id: new Date().getTime().toString(),
                    title,
                    genre,
                    episodes,
                    synopsis
                });
                res.status(201).json(newAnime);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'Unknown error occured' });
                }
            }
        });
    }
}
exports.AnimeController = AnimeController;
