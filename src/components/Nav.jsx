import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

export default function Nav() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">
          Andaman College Library
        </Link>
      </div>
      <div className="nav-right">
        {!user && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {user && (
          <>
            {user.role === "admin" ? (
              <Link to="/admin">Admin</Link>
            ) : (
              <Link to="/dashboard">My Dashboard</Link>
            )}
            <button onClick={handleLogout} className="link-like">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
