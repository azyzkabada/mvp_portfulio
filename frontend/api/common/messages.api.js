import axios from "axios";

const API_URL = "http://localhost:3000/api/messages";

const MessageAPI = {
  // 1. Create a new message
  createMessage: async (messageData) => {
    try {
      const response = await axios.post(`${API_URL}`, messageData);
      // console.log("Message Created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du message :", error);
      throw new Error("Failed to create the message. Please try again.");
    }
  },

  // 2. Toggle the archive status of a message
  toggleArchiveStatus: async (messageId) => {
    try {
      const response = await axios.patch(
        `${API_URL}/${messageId}/toggle-archive`
      );
      // console.log("Archive Status Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut d'archivage :",
        error
      );
      throw new Error("Failed to update archive status. Please try again.");
    }
  },

  // 3. Toggle the read status of a message
  toggleReadStatus: async (messageId) => {
    try {
      const response = await axios.patch(`${API_URL}/${messageId}/toggle-read`);
      // console.log("Read Status Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour du statut de lecture :",
        error
      );
      throw new Error("Failed to update read status. Please try again.");
    }
  },

  // 4. Get all messages
  getMessages: async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      // console.log("Messages Retrieved:", response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des messages :", error);
      throw new Error("Failed to retrieve messages. Please try again.");
    }
  },
};

export default MessageAPI;
