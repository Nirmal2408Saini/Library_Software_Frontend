import React, { useState } from "react";
import "./LoginPage.css";
import bgImage from "./background.png";
import logo from "./andaman-logo.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login submitted!");
  };

  return (
    <div className="login-container">
      {/* Left side background */}
      <div
        className="login-left"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right side form */}
      <div className="login-right">
        <div className="login-card">
          <div className="login-logo">
            <img src={logo} alt="Logo" />
            <h2>Andaman College</h2>
          </div>
          <h3 className="welcome-text">Nice to see you again</h3>

          <form onSubmit={handleSubmit}>
            <label>Login</label>
            <input
              type="text"
              name="login"
              placeholder="Email or phone number"
              value={formData.login}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <div className="password-field">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="eye-icon">👁️</span>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn primary-btn">
              Sign in
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account? <a href="/">Sign up now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
