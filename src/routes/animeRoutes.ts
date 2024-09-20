import { Router } from "express";
import { AnimeController } from "../controllers/AnimeController";

const router = Router()
const animeController = new AnimeController;

router.get('/', (req, res) => animeController.getAnimeList(req, res));
router.get('/:id', (req, res) => animeController.getAnimeById(req, res));
router.post('/', (req, res) => animeController.addAnime(req, res));

export default router;
