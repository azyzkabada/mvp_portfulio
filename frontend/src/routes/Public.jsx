import React, { useEffect, useState } from "react";
import API from "../../api/public/settings.api.js";
import Intro from "../components/Intro.jsx";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import ProjectDetails from "../components/ProjectDetails.jsx";
import ContactMe from "../components/ContactMe.jsx";
import "./public.css";

const { getData } = API;

function PublicView() {
  const [currentView, setCurrentView] = useState("main");
  const [data, setData] = useState(null);
  const [projectId, setProjectId] = useState(1);

  const fetchData = async () => {
    try {
      const dataRes = await getData();
      setData(dataRes.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const switchView = (view, id = null) => {
    setProjectId(id);
    setCurrentView(view);
  };

  const MainComp = () => (
    <div className="container px-4 py-5 d-flex flex-column align-items-center text-center">
      <div
        className="untree_co-section pb-0 d-flex justify-content-center"
        id="home-section"
      >
        {data && <Intro data={data.about} />}
      </div>
      <div
        className="untree_co-section pb-0 w-75 d-flex flex-column align-items-center"
        id="projects"
      >
        {data && <Projects switchView={switchView} />}
      </div>
      <div
        className="untree_co-section pb-0 w-75 d-flex flex-column align-items-center"
        id="contactMe"
      >
        {data && <ContactMe switchView={switchView} />}
      </div>
    </div>
  );

  const renderView = () => {
    switch (currentView) {
      case "main":
        return <MainComp />;
      case "projectDetails":
        return <ProjectDetails switchView={switchView} projectId={projectId} />;
      default:
        return <MainComp />;
    }
  };

  return (
    <div>
      <Navbar />
      {renderView()}
    </div>
  );
}

export default PublicView;
