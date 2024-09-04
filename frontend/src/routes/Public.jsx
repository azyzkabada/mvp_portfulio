import React, { useEffect, useState } from "react";
import API from "../../api/public/settings.api.js";
import Intro from "../components/Intro.jsx";
import Navbar from "../components/Navbar.jsx";

import "./public.css";
const { getData } = API;

function PublicView() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const dataRes = await getData();
      setData(dataRes.data);
    } catch (error) {
      // Gestion des erreurs
      setError("Erreur lors de la récupération des données.");
      console.error("Erreur:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="untree_co-section pb-0" id="home-section">
        {data && <Intro data={data.about} />}s
      </div>
    </div>
  );
}

export default PublicView;
