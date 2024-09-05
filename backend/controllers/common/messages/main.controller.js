const { MessagesModel } = require("../../../models/main.js");

// 1. Poster un nouveau message
const createMessage = async (req, res) => {
  try {
    const { authorFullName, email, content } = req.body;
    const newMessage = await MessagesModel.create({
      authorFullName,
      email,
      content,
    });
    res
      .status(201)
      .json({ message: "Message créé avec succès.", data: newMessage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du message.", error });
  }
};

// 2. Changer le statut d'archivage d'un message
const updateArchiveStatus = async (req, res) => {
  try {
    const { id } = req.params; //

    const [updated] = await MessagesModel.update(
      { isArchived: sequelize.literal("NOT isArchived") },
      { where: { id } }
    );

    if (updated) {
      const updatedMessage = await MessagesModel.findByPk(id);
      res.json({
        message: "Statut d'archivage mis à jour avec succès.",
        data: updatedMessage,
      });
    } else {
      res.status(404).json({ message: "Message non trouvé." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut d'archivage.",
      error,
    });
  }
};

// 3. Changer le statut de lecture d'un message
const updateReadStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the current status of the message
    const message = await MessagesModel.findByPk(id);

    if (!message) {
      return res.status(404).json({ message: "Message non trouvé." });
    }

    // Determine the new status based on the current status
    const newStatus = !message.isRead;

    // Update the message with the new status
    const [updated] = await MessagesModel.update(
      { isRead: newStatus },
      { where: { id } }
    );

    if (updated) {
      const updatedMessage = await MessagesModel.findByPk(id);
      res.json({
        message: "Statut de lecture mis à jour avec succès.",
        data: updatedMessage,
      });
    } else {
      res.status(404).json({ message: "Erreur lors de la mise à jour." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut de lecture.",
      error,
    });
  }
};

// 4. Récupérer tous les messages
const getMessages = async (req, res) => {
  try {
    const messages = await MessagesModel.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ message: "Messages récupérés avec succès.", data: messages });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des messages.",
      error,
    });
  }
};

module.exports = {
  createMessage,
  updateArchiveStatus,
  updateReadStatus,
  getMessages,
};
