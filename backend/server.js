import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";

import connectDB from "./libraries/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);

// ConnectDB and Running Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});
