import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/adminController.js";
import { adminRoute, protectedRoute } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/users", protectedRoute, adminRoute, getUsers);
router.get("/users/:id", protectedRoute, adminRoute, getUser);
router.put("/users/:id", protectedRoute, adminRoute, updateUser);
router.delete("/users/:id", protectedRoute, adminRoute, deleteUser);

export default router;
