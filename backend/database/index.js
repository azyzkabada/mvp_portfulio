const { Sequelize, DataTypes } = require("sequelize");
const config = require("./config");

// Configuration de la connexion à la base de données avec Sequelize
const connection = new Sequelize(config.name, config.user, config.password, {
  host: "localhost",
  port: config.port,
  dialect: "mysql",
  logging: (...msg) => console.log("---DATABASE LOGS:", msg),
});

// Fonction pour tester la connexion
const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Connexion à la base de données MySQL réussie avec Sequelize.");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données:", error);
  }
};

module.exports = { connection, testConnection };
