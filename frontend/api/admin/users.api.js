import axios from "axios";

const API = {
  getUser: () => {
    try {
      const response = axios.get(`http://localhost:3000/api/user/1`);

      return response;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  },

  updateUser: (updatedData) => {
    try {
      const response = axios.put(
        `http://localhost:3000/api/user/1`,
        updatedData
      );
      console.log("hina", updatedData);
      console.log("Utilisateur mis à jour avec succès:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      throw error;
    }
  },
};

export default API;
