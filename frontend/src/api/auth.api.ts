// src/api/auth.api.ts
import api from "./axios";

export const loginApi = (email: string, password: string) => {
  return api.post("/auth/login", { email, password });
};

export const signupApi = (name: string, email: string, password: string) => {
  return api.post("/auth/signup", { name, email, password });
};
