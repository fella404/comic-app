import { Router } from "express";
import {
  changePassword,
  getProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/authController.js";
import { protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", protectedRoute, logout);
router.get("/profile", protectedRoute, getProfile);
router.put("/profile/:id", protectedRoute, updateProfile);
router.post("/change-password/:id", protectedRoute, changePassword);

export default router;
