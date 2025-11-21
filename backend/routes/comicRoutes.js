import { Router } from "express";
import {
  addComic,
  getComic,
  getComics,
  updateComic,
} from "../controllers/comicController.js";
import { adminRoute, protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/admin/comics", protectedRoute, adminRoute, addComic);
router.get("/admin/comics", protectedRoute, getComics);
router.get("/admin/comics/:id", protectedRoute, getComic);
router.put("/admin/comics/:id", protectedRoute, adminRoute, updateComic);

export default router;
