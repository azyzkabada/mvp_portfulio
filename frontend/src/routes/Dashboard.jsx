import React, { useState } from "react";
import AdminNavbar from "../components/AdminBar.jsx";
import { NavLink } from "react-router-dom";
import Dashboard from "../components/res/admin/Intro.edit.jsx";
// Import your view components
// Define components for the routes

const Users = () => <h2>Users View</h2>;
const Settings = () => <h2>Settings View</h2>;
const Reports = () => <h2>Reports View</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

const Sidebar = ({ onViewChange }) => {
  return (
    <div className="bg-dark text-white vh-100 p-3 rounded-lg">
      <h4 className="text-center">Admin Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("dashboard")}
          >
            <i class="fas fa-heart"></i> Intro
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("users")}
          >
            <i className="fas fa-users"></i> Users
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("settings")}
          >
            <i className="fas fa-cog"></i> Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("reports")}
          >
            <i className="fas fa-chart-bar"></i> Reports
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => alert("Logged out")}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

const Main = ({ handelDep }) => {
  const [currentView, setCurrentView] = useState("dashboard");

  const switchView = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <AdminNavbar handelDep={handelDep} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar onViewChange={switchView} />{" "}
          </div>
          <div className="col-md-9 col-lg-10">
            <div className="p-4">{renderView()}</div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
