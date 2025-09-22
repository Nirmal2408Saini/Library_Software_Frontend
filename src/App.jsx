import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AndamanCollegeLibrary from "./pages/bookself";
import Login from "./pages/Login";
import LibraryDashboard from "./pages/Dashboard";
import Registration from "./pages/registration";
import Nav from "./components/Nav";
import { getCurrentUser } from "./utils/auth";

// Protect routes
function RequireAuth({ children, adminOnly = false }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && user.role !== "admin")
    return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  return (
    <AndamanCollegeLibrary />
    // <>
    //   {}
    //   <Nav />

    //   <Routes>
    //     {/* Default route */}
    //     <Route path="/" element={<Navigate to="/login" replace />} />

    //     {/* Login */}
    //     <Route path="/login" element={<Login />} />

    //     {/* Registration */}
    //     <Route path="/register" element={<Registration />} />

    //     {/* Dashboard (protected) */}
    //     <Route path="/dashboard" element={<LibraryDashboard />} />

    //     {/* Catch-all for unknown routes */}
    //     <Route path="*" element={<Navigate to="/login" replace />} />
    //   </Routes>
    // </>
  );
}
