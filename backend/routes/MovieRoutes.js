import express from "express";
import { getProductById, getMovies } from "../controllers/MovieController.js";

const router = express.Router();

router.route("/").get(getMovies);

router.route("/:id").get(getProductById);

export default router;
