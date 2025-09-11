import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LibraryDashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import { getCurrentUser } from "./utils/auth";
import Registration from "./pages/registration";

function RequireAuth({ children, adminOnly = false }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && user.role !== "admin")
    return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  return (
    // <Login />
    <LibraryDashboard />
    // <Registration />
    // <div className="app-root">
    //   <Nav />
    //   <main className="container">
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/register" replace />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<Login />} />

    //       <Route
    //         path="/dashboard"
    //         element={
    //           <RequireAuth>
    //             <UserDashboard />
    //           </RequireAuth>
    //         }
    //       />

    //       <Route
    //         path="/admin"
    //         element={
    //           <RequireAuth adminOnly={true}>
    //             <AdminDashboard />
    //           </RequireAuth>
    //         }
    //       />

    //       <Route
    //         path="*"
    //         element={<h2 style={{ padding: 20 }}>404 - Not Found</h2>}
    //       />
    //     </Routes>
    //   </main>
    // </div>
  );
}
