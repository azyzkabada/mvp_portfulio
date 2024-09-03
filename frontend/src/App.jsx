import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./routes/Admin";
import Dashboard from "./routes/Dashboard";
import Public from "./routes/Public";
import UrlListener from "./components/UrlListener.jsx"; // Importer le composant UrlListener

import helper from "../api/admin/auth.admins"; // Importer la fonction login depuis authService
const { getToken, logout } = helper;

function App() {
  const [isToken, setIsToken] = useState(false);
  const [dep, setDep] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsToken(true);
    }
  }, [dep]);

  const handelDep = () => {
    console.log("Logout clicked");
    setDep(!dep);
  };

  return (
    <Router>
      <UrlListener setIsToken={setIsToken} />{" "}
      {/* Utiliser le composant UrlListener */}
      <Routes>
        <Route path="/" element={<Public />} />
        <Route
          path="/admin"
          element={
            isToken ? (
              <Dashboard handelDep={handelDep} />
            ) : (
              <Admin handelDep={handelDep} />
            )
          }
        />
        {/* Ajouter une route /logout pour gérer la déconnexion */}
        <Route path="/logout" element={<Public />} />
      </Routes>
    </Router>
  );
}

export default App;
