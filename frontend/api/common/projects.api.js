import axios from "axios";

const API_URL = "http://localhost:3000/api/projects";

const API = {
  // 1. Create a new project
  createProject: async (projectData) => {
    try {
      const response = await axios.post(`${API_URL}`, projectData);
      // console.log("Project Created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
      throw new Error("Failed to create the project. Please try again.");
    }
  },

  // 2. Toggle the display status of a project
  toggleDisplayStatus: async (projectId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${projectId}/toggle-display`
      );
      // console.log("Display Status Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'affichage :",
        error
      );
      throw new Error("Failed to update display status. Please try again.");
    }
  },

  // 3. Toggle the archived status of a project
  toggleArchivedStatus: async (projectId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${projectId}/toggle-archived`
      );
      // console.log("Archived Status Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'archivage :",
        error
      );
      throw new Error("Failed to update archived status. Please try again.");
    }
  },

  // 4. Delete a project
  deleteProject: async (projectId) => {
    try {
      const response = await axios.delete(`${API_URL}/${projectId}`);
      // console.log("Project Deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression du projet :", error);
      throw new Error("Failed to delete the project. Please try again.");
    }
  },

  // 5. Edit a project
  editProject: async (projectId, projectData) => {
    try {
      console.log(projectId, projectData);
      const response = await axios.put(`${API_URL}/${projectId}`, projectData);
      // console.log("Project Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la modification du projet :", error);
      throw new Error("Failed to update the project. Please try again.");
    }
  },

  // 6. Get actif data
  getData: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      // console.log("Settings Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },

  // 7. Get all data
  getAllData: async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/allprojects`);
      // console.log("Settings Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },

  // 8. Get One data

  getOneData: async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/project/${id}`
      );
      // console.log("Settings Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },
};

export default API;
