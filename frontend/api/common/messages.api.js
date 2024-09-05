import axios from "axios";

const API_URL = "http://localhost:3000/api/messages";

const MessageAPI = {
  createMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API_URL}`, messageData);

      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du message :", error);
      throw new Error("Failed to create the message. Please try again.");
    }
  },

  toggleArchiveStatus: async (messageId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${messageId}/toggle-archive`
      );

      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'archivage :",
        error
      );
      throw new Error("Failed to update archive status. Please try again.");
    }
  },

  toggleReadStatus: async (messageId) => {
    try {
      const response = await axios.patch(`${API_URL}/${messageId}/toggle-read`);

      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut de lecture :",
        error
      );
      throw new Error("Failed to update read status. Please try again.");
    }
  },

  getMessages: async () => {
    try {
      const response = await axios.get(`${API_URL}`);

      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des messages :", error);
      throw new Error("Failed to retrieve messages. Please try again.");
    }
  },
};

export default MessageAPI;
