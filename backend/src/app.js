import express from "express";
import cors from "cors";

import todoRoutes from "./routes/todo.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/* ---------- Global Middlewares ---------- */
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));
app.use(express.json());

/* ---------- Routes ---------- */
app.use("/api/todos", todoRoutes);

/* ---------- Health Check ---------- */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

/* ---------- Error Handler (LAST) ---------- */
app.use(errorHandler);

export default app;
