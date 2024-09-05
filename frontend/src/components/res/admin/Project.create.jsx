import React, { useState } from "react";
import imageUploader from "../../../../api/admin/imageUploader.api.js";
import API from "../../../../api/common/projects.api.js";
const { createProject } = API;
const { uploadImage } = imageUploader;

const CreateProject = () => {
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    mainImage: "",
    projectName: "",
    content: "",
    display: false,
    likes: 0,
  });

  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for creating a new project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createProject(formData);
      setMessage(result.message || "Project created successfully!");
    } catch (error) {
      setMessage(error.message || "Failed to create project.");
    }
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          mainImage: imageUrl,
        }));
        setMessage("Image uploaded successfully!");
      }
    } catch (error) {
      setMessage("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <h5>Create New Project</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-5">
          <h4 htmlFor="projectName" className="bold700 dark">
            Project Name
          </h4>
          <input
            type="text"
            className="form-control"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h4 htmlFor="imageUpload" className="bold700 dark">
            Upload Main Image
          </h4>
          <input
            type="file"
            className="form-control"
            id="imageUpload"
            name="imageUpload"
            onChange={handleImageUpload}
          />
          {uploading && <p>Uploading image...</p>}
          {formData.mainImage && (
            <img
              src={formData.mainImage}
              alt="Uploaded"
              style={{ width: "100px", marginTop: "10px" }}
            />
          )}
        </div>
        <div className="mb-3">
          <h4 htmlFor="content" className="bold700 dark">
            Content
          </h4>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="5"
            value={formData.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <h4 htmlFor="date" className="bold700 dark">
            Date
          </h4>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default CreateProject;
