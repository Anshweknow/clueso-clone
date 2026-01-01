import express from "express";
import cors from "cors";

import authRoutes from "./modules/auth/auth.routes";
import feedbackRoutes from "./modules/feedback/feedback.routes";
import insightsRoutes from "./modules/insights/insights.routes";

const app = express();

/* ✅ MIDDLEWARE FIRST */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

/* ✅ ROUTES AFTER MIDDLEWARE */
app.use("/api/auth", authRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/insights", insightsRoutes);

export default app;
