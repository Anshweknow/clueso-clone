import { useState } from "react";
import axiosInstance from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
/* Importing styling for the premium look and animated background */
import "../styles/common.css";
import "../styles/auth.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      console.log("Signup Successful:", response.data);
      navigate("/login");
    } catch (err: any) {
      // DEBUGGING LOGS: Open your browser console (F12) to see these
      console.error("--- SIGNUP ERROR DEBUG ---");
      console.error("Status Code:", err.response?.status);
      console.error("Server Message:", err.response?.data?.message || err.message);
      console.error("Full Error Object:", err);

      // Display the specific message from your backend if available
      const serverErrorMessage = err.response?.data?.message || "Signup failed. Please check your connection.";
      setError(serverErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page dynamic-bg">
      <div className="auth-card">
        <h2 className="auth-title">Join Clueso</h2>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="auth-input"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="auth-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Get Started"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? 
            <Link to="/login" className="auth-link"> Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;