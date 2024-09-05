import axios from "axios";

const API_URL = "http://localhost:3000/api/projects";

const API = {
  createProject: async (projectData) => {
    try {
      const response = await axios.post(`${API_URL}`, projectData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
      throw new Error("Failed to create the project. Please try again.");
    }
  },

  toggleDisplayStatus: async (projectId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${projectId}/toggle-display`
      );
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'affichage :",
        error
      );
      throw new Error("Failed to update display status. Please try again.");
    }
  },

  toggleArchivedStatus: async (projectId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${projectId}/toggle-archived`
      );
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'archivage :",
        error
      );
      throw new Error("Failed to update archived status. Please try again.");
    }
  },

  deleteProject: async (projectId) => {
    try {
      const response = await axios.delete(`${API_URL}/${projectId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
      throw new Error("Failed to delete the project. Please try again.");
    }
  },

  editProject: async (projectId, projectData) => {
    try {
      console.log(projectId, projectData);
      const response = await axios.put(`${API_URL}/${projectId}`, projectData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la modification du projet :", error);
      throw new Error("Failed to update the project. Please try again.");
    }
  },

  getData: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },

  getAllData: async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/allprojects`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },

  getOneData: async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/project/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },
};

export default API;
