import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Log.css";
import { useUser } from '../../UserContext'; // Import the useUser hook

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser(); // Retrieve the login function from context

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/login", {
        email: formData.username,
        password: formData.password,
      });
      const { token, userName, userEmail } = response.data;
      login(token, userName, userEmail); // Use the login function from context
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
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

        <button type="button" onClick={handleLogin}>
          {loading ? <div className="loader"></div> : "Log In"}
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
