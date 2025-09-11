import React, { useState } from "react";
import "./RegistrationForm.css";
import collegeLogo from "./andaman-logo.png";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    branch: "",
    email: "",
    phone: "",
    year: "I",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      branch: "",
      email: "",
      phone: "",
      year: "I",
    });
  };

  return (
    <div className="register-container">
      {/* Left side */}
      <div className="left-panel">
        <div className="overlay">
          <h2>REGISTER NOW</h2>
          <p>while seats are available !</p>
        </div>
      </div>

      {/* Right side */}
      <div className="right-panel">
        <div className="form-header">
          <img
            src={collegeLogo}
            alt="Andaman College Logo"
            className="college-logo"
          />
          <h1>Registration Form</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Branch *</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
              />
            </div>
            <div className="form-group">
              <label>Year</label>
              <select name="year" value={formData.year} onChange={handleChange}>
                <option>I</option>
                <option>II</option>
                <option>III</option>
                <option>IV</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
            <button type="button" className="reset-btn" onClick={handleReset}>
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
