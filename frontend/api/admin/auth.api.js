import axios from "axios";

const API_URL = "http://localhost:3000/api";

const API = {
  login: async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      const { token } = response.data;

      localStorage.setItem("porfulio2point0", token);

      return token;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },

  getToken: () => {
    return localStorage.getItem("porfulio2point0");
  },

  logout: () => {
    localStorage.removeItem("porfulio2point0");
  },
};

export default API;
