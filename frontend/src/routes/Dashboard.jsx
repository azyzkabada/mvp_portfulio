import React, { useState } from "react";
import AdminNavbar from "../components/AdminBar.jsx";
import Intro from "../components/res/admin/Intro.edit.jsx";
import Projects from "../components/res/admin/Projects.jsx";
import ProjectEdit from "../components/res/admin/Project.edit.jsx";
import Messages from "../components/res/admin/Messages.jsx";
import AdminDetails from "../components/res/admin/User.edit.jsx";

const Sidebar = ({ onViewChange }) => {
  return (
    <div className="bg-dark text-white vh-100 p-3 rounded-lg">
      <h4 className="text-center">Admin CMS</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("intro")}
          >
            <i className="fas fa-heart"></i> Intro
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("projects")}
          >
            <i className="fas fa-diagram-project"></i> Projects
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("messages")}
          >
            <i className="fas fa-message"></i> Messages
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-link"
            onClick={() => onViewChange("user")}
          >
            <i className="fas fa-user"></i> User
          </button>
        </li>
      </ul>
    </div>
  );
};

const Main = ({ handelDep }) => {
  const [currentView, setCurrentView] = useState("intro");
  const [projectId, setProjectId] = useState(null);

  const switchView = (view, id = null) => {
    console.log(id);
    setProjectId(id);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "intro":
        return <Intro />;

      case "projects":
        return <Projects switchView={switchView} />;

      case "project":
        return <ProjectEdit projectId={projectId} />;

      case "messages":
        return <Messages />;

      case "user":
        return <AdminDetails />;

      default:
        return <Intro />;
    }
  };

  return (
    <>
      <AdminNavbar IntroandelDep={handelDep} />
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
