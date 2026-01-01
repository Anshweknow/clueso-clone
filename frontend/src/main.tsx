import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext";

// global styles
import "./styles/common.css";
import "./styles/layout.css";
import "./styles/dashboard.css";
import "./styles/feedback.css";
import "./styles/insights.css";
import "./styles/auth.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
