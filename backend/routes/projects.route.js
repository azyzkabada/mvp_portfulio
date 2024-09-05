const express = require("express");
const {
  getOneProject,
  createProject,
  updateIsDisplayStatus,
  updateArchivedStatus,
  deleteProject,
  editProject,
  getAllProjects,
  getAllProjectsAll,
} = require("../controllers/common/projects/main.controller");

const router = express.Router();

// create a new project
router.post("/projects", createProject);

// get one project
router.get("/project/:id", getOneProject);

// toggle the display
router.patch("/projects/:id/toggle-display", updateIsDisplayStatus);

// toggle the archived
router.patch("/projects/:id/toggle-archive", updateArchivedStatus);

// delete a project
router.delete("/projects/:id", deleteProject);

// edit a project
router.put("/projects/:id", editProject);

// get projetcs
router.get("/projects", getAllProjects);

// get projetcs
router.get("/allprojects", getAllProjectsAll);

module.exports = router;
