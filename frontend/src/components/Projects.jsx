import React, { useEffect, useState } from "react";
import API from "../../api/common/projects.api";
import TheProject from "./OneProject";
const { getData } = API;

const Projects = ({ switchView }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await getData();
      setData(response.data);
    } catch (error) {
      1;
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="portfolio-wrapper justify-content-center">
      <h2 className="display-8 fw-bold text-black font-weight-bold mb-5 ">
        Projects
      </h2>
      <div id="posts" className="row justify-content-center">
        {data.map((e) => {
          return <TheProject switchView={switchView} data={e} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
