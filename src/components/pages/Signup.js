import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setSuccessMessage(response.data.message);
      navigate("/login");
      setError("");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label htmlFor="rePassword">Re-enter Password:</label>
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Signup;
