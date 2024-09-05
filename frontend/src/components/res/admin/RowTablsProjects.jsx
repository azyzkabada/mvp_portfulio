import React, { useEffect, useState } from "react";
import helpers from "../../../../helpers/textImpacts.js";
const { limiterTexte } = helpers;
import API from "../../../../api/common/projects.api.js";
const { toggleDisplayStatus, deleteProject } = API;

function Row({ data, switchView, setDep }) {
  const [datas, setDatas] = useState([]);
  const [display, setDisplay] = useState(null);

  const handleDelete = async () => {
    try {
      const respose = deleteProject(data.id);
      if (respose) {
        setDep();
      }
    } catch (error) {
      console.log("erreur :", error);
    }
  };

  const handleToggle = () => {
    toggleDisplayStatus(data.id);
    setDisplay(!display);
  };

  const handleSwitch = () => {
    switchView("project", data.id);
  };

  useEffect(() => {
    setDatas(data);

    setDisplay(data.display);
  }, []);

  const buttonStyles = {
    true: {
      backgroundColor: "green",
      color: "white",
      border: "1px solid darkgreen",
      padding: "5px 10px",
      cursor: "pointer",
    },
    false: {
      backgroundColor: "red",
      color: "white",
      border: "1px solid darkred",
      padding: "5px 10px",
      cursor: "pointer",
    },
    gen: {
      border: "1px solid darkred",
      padding: "5px 10px",
      cursor: "pointer",
    },
  };

  return (
    <tr>
      <th>{datas.id}</th>
      <th>{datas.projectName ? limiterTexte(datas.projectName, 10) : "..."}</th>
      <th>{datas.content ? limiterTexte(datas.content) : "..."}</th>
      <th>{datas.date}</th>
      <th>{datas.likes}</th>
      <th className="d-flex ">
        <button
          className="btn px-1"
          style={display ? buttonStyles.true : buttonStyles.false}
          onClick={handleToggle}
        >
          display
        </button>
        <button
          style={buttonStyles.gen}
          className="btn btn-primary mx-2"
          onClick={() => handleSwitch(data.id)}
        >
          edit
        </button>
        <button
          style={buttonStyles.false}
          className="btn btn-primary mx-2"
          onClick={handleDelete}
        >
          delete
        </button>
      </th>
    </tr>
  );
}

export default Row;
