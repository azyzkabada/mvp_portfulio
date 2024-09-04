import axios from "axios";

const API_URL = "http://localhost:3000/api";

const API = {
  getData: async () => {
    try {
      const response = await axios.get(API_URL + "/settings");
      console.log("DATAJET", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw new Error("Failed to retrieve data. Please try again.");
    }
  },
};

export default API;
