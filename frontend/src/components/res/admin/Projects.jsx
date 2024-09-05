import React, { useEffect, useState } from "react";
import API from "../../../../api/common/projects.api.js";
const { getAllData } = API;

import Row from "./RowTablsProjects.jsx";

const ListProjects = ({ switchView }) => {
  const [data, setData] = useState([]);
  const [dep, setDeps] = useState(true);

  const setDep = () => {
    setDeps(!dep);
  };

  const fetchData = async () => {
    try {
      const response = await getAllData();
      setData(response.data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [dep]);

  return (
    <div className="p-4">
      <h5>Projects</h5>
      <div className="card shadow mb-4 mt-5">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            List of projects{" "}
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Project Name</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th>Interactions</th>
                  <th> </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Project Name</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th>Interactions</th>
                  <th>---</th>
                </tr>
              </tfoot>
              <tbody>
                {data.map((e, i) => {
                  return (
                    <Row
                      setDep={setDep}
                      key={i}
                      data={e}
                      switchView={switchView}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProjects;
