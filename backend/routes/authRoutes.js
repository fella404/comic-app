import { Router } from "express";
import {
  changePassword,
  getProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/authController.js";
import { adminRoute, protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", protectedRoute, adminRoute, getProfile);
router.put("/profile/:id", protectedRoute, adminRoute, updateProfile);
router.post("/change-password/:id", protectedRoute, changePassword);

export default router;
