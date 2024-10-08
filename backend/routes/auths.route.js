// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUser,
  updateUser,
} = require("../controllers/admin/users.controller.js");

// Route pour l'enregistrement d'un administrateur
router.post("/register", registerUser);

// Route pour la connexion de l'administrateur
router.post("/login", loginUser);

// Route pour get
router.get("/user/:id", getUser);

// Route pour modifier user
router.put("/user/:id", updateUser);

module.exports = router;
