import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import Insights from "./pages/Insights";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import ProtectedRoute from "./routes/ProtectedRoute";

/* Styles */
import "./styles/common.css";
import "./styles/layout.css";

/* Protected Layout */
const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ProtectedRoute>
      <div className="app-shell dynamic-bg">
        <Navbar />
        <div className="main-layout">
          <Sidebar />
          <main className="content-area">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route
          path="/feedback"
          element={
            <ProtectedLayout>
              <Feedback />
            </ProtectedLayout>
          }
        />

        <Route
          path="/insights"
          element={
            <ProtectedLayout>
              <Insights />
            </ProtectedLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
