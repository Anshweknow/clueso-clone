import { Request, Response } from "express";
import { InsightsService } from "./insights.service";

export const getInsights = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  const insights = await InsightsService.getInsights(userId);
  res.json(insights);
};
