import React, { useEffect, useState } from "react";
import API from "../../../../api/admin/users.api.js"; // Updated import path for Admins API
const { getUser, updateUser } = API;

const AdminDetails = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "admin",
  });
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const user = await getUser();
      const { data } = user;
      console.log("houni", user);
      setFormData({
        email: data.email,
        password: "",
        fullName: data.fullName,
      });
    } catch (error) {
      setMessage(
        `Erreur lors de la récupération des données: ${error.message}`
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
      };

      const result = await updateUser(updatedData);
      setMessage("Détails mis à jour avec succès");
    } catch (error) {
      setMessage(`Erreur lors de la mise à jour: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h5>Update Admin Details</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
          <h4 htmlFor="email" className="bold700 dark">
            Email
          </h4>
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
        <div className="mb-3">
          <h4 htmlFor="password" className="bold700 dark">
            Password
          </h4>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h4 htmlFor="fullName" className="bold700 dark">
            Full Name
          </h4>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Admin
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default AdminDetails;
