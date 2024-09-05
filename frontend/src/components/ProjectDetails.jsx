import React, { useEffect, useState } from "react";
import API from "../../api/common/projects.api";
const { getOneData } = API;

const ProjectDetail = ({ projectId, switchView }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getOneData(projectId);
      setData(response.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="untree_co-section untree_co-section-4 pb-0"
      id="portfolio-section"
    >
      <div className="container">
        <div
          className="portfolio-single-wrap unslate_co--section"
          id="portfolio-single-section"
        >
          <div className="portfolio-single-inner">
            <div className="row mb-5 align-items-stretch">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <img src={data.mainImage} alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-6 pl-lg-5">
                <div className="row mb-3">
                  <div className="col-sm-6 col-md-6 col-lg-6 mb-4">
                    <span className="detail-label">Project Name</span>
                    <h2 className="heading-portfolio-single-h2 text-black">
                      {data.projectName}
                    </h2>
                    <div className="detail-v1">
                      <span className="detail-label">Project Date</span>
                      <span className="detail-val">{data.date}</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-weight-bold border-bottom">
                  Description :{" "}
                </h5>
                <p className="detail-val">{data.content}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            switchView("main");
          }}
        >
          {" "}
          <p className="detail-val">🔙 back to main</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
