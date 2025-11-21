import { Router } from "express";
import { addComic } from "../controllers/comicController.js";
import { adminRoute, protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/admin/comics", protectedRoute, adminRoute, addComic);

export default router;
