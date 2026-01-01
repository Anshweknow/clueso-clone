import { Request, Response } from "express";
import { FeedbackService } from "./feedback.service";

/* ===============================
   UPDATE FEEDBACK STATUS
================================ */
export const updateFeedbackStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = (req as any).userId;
    const { feedbackId } = req.params;

    const status = req.body.status as
      | "PENDING"
      | "REVIEWED"
      | "ACTION_REQUIRED";

    const allowedStatuses = [
      "PENDING",
      "REVIEWED",
      "ACTION_REQUIRED",
    ] as const;

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updated = await FeedbackService.updateStatus(
      feedbackId,
      status,
      userId
    );

    res.json(updated);
  } catch (error) {
    console.error("Update status error:", error);
    res.status(500).json({ message: "Failed to update status" });
  }
};
