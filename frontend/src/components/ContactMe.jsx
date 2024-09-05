import React, { useState } from "react";
import API from "../../api/common/messages.api";

const { createMessage } = API;

const Projects = ({ switchView }) => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  // State for feedback message
  const [feedback, setFeedback] = useState("");

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructuring lastname correctly from formData
    const { firstname, lastname, email, message } = formData;

    const newMessage = {
      authorFullName: `${firstname} ${lastname}`,
      email,
      content: message,
    };

    try {
      const sent = await createMessage(newMessage);
      setFeedback("Message sent successfully!");
    } catch (err) {
      console.error("Error sending message:", err);
      setFeedback("Failed to send message. Please try again.");
    }

    // Reset form fields
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contactme" className="col-lg-10">
      <h2 className="display-8 fw-bold text-black font-weight-bold mb-4">
        Contact Me
      </h2>
      {feedback && <p className="feedback-message">{feedback}</p>}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 form-group">
            <textarea
              name="message"
              cols="30"
              rows="7"
              className="form-control"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12 form-group">
            <input
              type="submit"
              className="btn btn-black"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Projects;
