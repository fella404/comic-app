import { Router } from "express";
import {
  addComic,
  getComic,
  getComics,
} from "../controllers/comicController.js";
import { adminRoute, protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/admin/comics", protectedRoute, adminRoute, addComic);
router.get("/admin/comics", protectedRoute, adminRoute, getComics);
router.get("/admin/comics/:id", protectedRoute, adminRoute, getComic);

export default router;
