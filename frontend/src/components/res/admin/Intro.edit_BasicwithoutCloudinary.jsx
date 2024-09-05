import React, { useEffect, useState } from "react";
import API from "../../../../api/admin/intro.api.js"; // Import the updateSettings function
const { updateSettings, getData } = API;

const Dashboard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    imageUrl: "",
    biography: "",
    specialite: "",
    introductions: "",
  });
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const data = await getData();
      console.log(data);
      setData(data.data.about);
      setFormData(data.data.about);
    } catch (error) {
      setMessage(error.message);
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
      const result = await updateSettings(formData);
      setMessage(result.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="p-4">
      <h5>Update Intro Section </h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
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
          />
        </div>
        <div className="mb-3">
          <h4 htmlFor="fullName" className="bold700 dark">
            Image URL
          </h4>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h4 htmlFor="fullName" className="bold700 dark">
            Biography
          </h4>

          <textarea
            className="form-control"
            id="biography"
            name="biography"
            rows="5"
            value={formData.biography}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <h4 htmlFor="fullName" className="bold700 dark">
            Specialité
          </h4>
          <input
            type="text"
            className="form-control"
            id="specialite"
            name="specialite"
            value={formData.specialite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h4 htmlFor="fullName" className="bold700 dark">
            Introductions
          </h4>
          <textarea
            className="form-control"
            id="introductions"
            name="introductions"
            rows="3"
            value={formData.introductions}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>{" "}
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Dashboard;
