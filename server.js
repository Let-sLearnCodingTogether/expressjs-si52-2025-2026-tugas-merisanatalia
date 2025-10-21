import express from "express"
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import wordRoutes from "./routes/wordRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/words", wordRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
