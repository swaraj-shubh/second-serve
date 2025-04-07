import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect routes
app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);


// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });
