import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./libraries/db.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(
  cors({
    origin: [process.env.ADMIN_DASHBOARD_URL, process.env.FRONTEND_URL],
  })
);
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// ConnectDB and Running Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
