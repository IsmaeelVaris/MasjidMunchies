import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/users"; // existing routes
import authRoutes from "./routes/auth";  // new auth routes
import reviewRoutes from "./routes/reviews"; // new review routes

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Existing user routes
app.use("/users", userRoutes);

// New routes
app.use("/auth", authRoutes);       // registration / login with JWT
app.use("/reviews", reviewRoutes);  // add reviews, upsert restaurants/masjids

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
