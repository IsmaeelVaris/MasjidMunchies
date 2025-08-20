import express, { Request, Response } from "express";
import userRoutes from "./routes/users";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
