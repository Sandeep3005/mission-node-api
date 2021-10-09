import express from "express";
import controller from "../controllers/sample";

const router = express.Router();

router.get("/ping", controller.serverHealthCheck);
router.get("/movies", controller.getAllMovies);
router.get("/movie/:id", controller.getOneMovie);
router.get("/castMembers", controller.getAllCastMembers);
router.get("/castMember/:name", controller.getOneCastMember);
router.get("/random_team", controller.getRandomTeam);

export = router;
