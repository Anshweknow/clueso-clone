// src/api/axios.ts
import axios from "axios";
import { getToken } from "../utils/token";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change if backend runs on different port
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
