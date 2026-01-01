import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const result = await AuthService.signup(name, email, password);
  res.status(201).json(result);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await AuthService.login(email, password);
  res.json(result);
};
