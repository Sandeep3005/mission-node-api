import express from "express";
import controller from "../controllers/sample";

const router = express.Router();

router.get("/ping", controller.serverHealthCheck);
router.get("/movies", controller.getAllMovies);
router.get("/movie/:id", controller.getMovieById);
router.get("/castMembers", controller.getAllCastMembers);
router.get("/castMember/:name", controller.getCastMemberByName);
router.get("/random_team/:size", controller.getRandomTeam);

export = router;
