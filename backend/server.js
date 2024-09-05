// Importation
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Environment dEV
require("dotenv").config();

// Databases
const { testConnection } = require("./database/index.js");
const { syncModels } = require("./models/main");
// syncModels();

// Création de l'application Express
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

//* ROUTES
//Authentication
const authenticationRouter = require("./routes/auths.route.js");
app.use("/api", authenticationRouter);

//Settings
const settingsRouter = require("./routes/settings.route.js");
app.use("/api", settingsRouter);

//Messages
const messageRouter = require("./routes/messages.route.js");
app.use("/api", messageRouter);

//Projects
const projectsRouter = require("./routes/projects.route.js");
app.use("/api", projectsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("-".repeat(30));
  console.log(`Azyz's Express server listening on http://localhost:${PORT}`);
  console.log("-".repeat(30));
  testConnection();
  console.log("-".repeat(30));
});
