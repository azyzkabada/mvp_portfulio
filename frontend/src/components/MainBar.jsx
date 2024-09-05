import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h4 className="text-center">Admin Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white" href="#dashboard">
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#users">
            <i className="fas fa-users"></i> Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#settings">
            <i className="fas fa-cog"></i> Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#reports">
            <i className="fas fa-chart-bar"></i> Reports
          </a>
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
export default Sidebar;
