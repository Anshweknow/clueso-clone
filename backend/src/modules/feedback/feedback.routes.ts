import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware";
import { createFeedback, listFeedback } from "./feedback.controller";

const router = Router();

router.post("/", protect, createFeedback);
router.get("/", protect, listFeedback);

export default router;
