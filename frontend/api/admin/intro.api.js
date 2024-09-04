import axios from "axios";

const API_URL = "http://localhost:3000/api/settings/";

const API = {
  updateSettings: async (settings) => {
    console.log(settings);
    try {
      const response = await axios.put(API_URL + `edit-about`, settings);
      return response.data;
    } catch (error) {
      console.error("Error updating settings:", error);
      throw new Error("Failed to update settings. Please try again.");
    }
  },
  getData: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },
};
export default API;
