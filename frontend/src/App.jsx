import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminLogin from "./routes/Admin";
import Dashboard from "./routes/Dashboard";
import Public from "./routes/Public";

import helper from "../api/admin/auth.api.js";
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
      <Routes>
        <Route path="/" element={<Public />} />
        <Route
          path="/admin"
          element={
            isToken ? (
              <Dashboard handelDep={handelDep} />
            ) : (
              <AdminLogin handelDep={handelDep} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
