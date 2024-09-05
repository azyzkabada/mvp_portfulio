// Login.js
import React, { useState } from "react";
import API from "../../api/admin/auth.api.js"; // Importer la fonction login depuis authService
const { login } = API;

const Login = ({ handelDep }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const token = await login(formData);
      localStorage.setItem("The Token", token);

      if (token) {
        handelDep();
      }

      console.log("Login successful, token stored:", token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="col-lg-6 mx-auto">
      <div className="custom-block">
        <h2 className="section-title text-black text-center">Login</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
