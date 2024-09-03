const { connection } = require("../database/index");
const { DataTypes } = require("sequelize");

// Importation des modèles

//* Admins
const AdminsModel = require("./admin/users.model")(connection, DataTypes);

//* Settings
const SettingsModel = require("./common/settings/main.model")(
  connection,
  DataTypes
);

//* Projects
const ProjectsModel = require("./common/projects/main.model")(
  connection,
  DataTypes
);

//* Messages
const MessagesModel = require("./common/messages/main.model")(
  connection,
  DataTypes
);

// Configuration des Relations
//////

// Synchroniser les modèles avec la base de données
const syncModels = async () => {
  try {
    await connection.sync();
    console.log("Les tables ont été synchronisées");
  } catch (error) {
    console.error("Erreur lors de la synchronisation des tables:", error);
  }
};

module.exports = {
  syncModels,
  //* Models
  AdminsModel,
  MessagesModel,
  ProjectsModel,
  SettingsModel,
};
