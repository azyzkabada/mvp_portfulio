import React from "react";
import emoji from "react-easy-emoji";
import { Link } from "react-router-dom";
import Login from "../components/Login.jsx";
///
const AdminLogin = ({ handelDep }) => {
  const newStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%", // Ajustement pour la réactivité
    maxWidth: "800px", // Limite maximale
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div
        className="container justify-content-center align-items-center"
        style={newStyle}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row">
          <Login handelDep={handelDep} />
        </div>
        <div className="row justify-content-center align-items-cente">
          <a href="/">{emoji("🔙 😀")} Back to home</a>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
