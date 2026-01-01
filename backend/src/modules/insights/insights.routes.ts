import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware";
import { getInsights } from "./insights.controller";

const router = Router();

router.get("/", protect, getInsights);

export default router;
