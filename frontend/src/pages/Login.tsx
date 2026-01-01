import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "../api/axios";
import { setToken } from "../utils/token";

import "../styles/common.css";
import "../styles/auth.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
  const response = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  console.log("LOGIN RESPONSE STATUS:", response.status);
  console.log("LOGIN RESPONSE DATA:", response.data);

  setToken(response.data.token);
  navigate("/dashboard");
} catch (err: any) {
  console.error("Login failed:", err.response?.data || err.message);
  setError(err.response?.data?.message || "Login failed");
}

  };

  return (
    <div className="auth-page dynamic-bg">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            New to Clueso?
            <Link to="/signup" className="auth-link">
              {" "}
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
