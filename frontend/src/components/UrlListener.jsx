import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import helper from "../../api/admin/auth.admins"; // Importer logout depuis le helper
const { logout } = helper;

const UrlListener = ({ setIsToken }) => {
  const location = useLocation(); // Utilisez useLocation pour obtenir l'URL actuelle

  useEffect(() => {
    const handleUrlChange = () => {
      if (location.pathname === "/logout") {
        // Vérifiez si l'URL est /logout
        logout(); // Exécuter la fonction de déconnexion
        setIsToken(false); // Mettre à jour l'état pour refléter la déconnexion
        console.log("Déconnecté avec succès");
      }
    };

    handleUrlChange(); // Appeler la fonction au montage et lorsque l'URL change
  }, [location, setIsToken]);

  return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
};

export default UrlListener;
