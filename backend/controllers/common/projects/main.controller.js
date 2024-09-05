const { ProjectsModel } = require("../../../models/main.js");

// 1. Create a new project
const createProject = async (req, res) => {
  try {
    const { date, projectName, content } = req.body;
    const newProject = await ProjectsModel.create({
      date,
      projectName,
      content,
    });
    res
      .status(201)
      .json({ message: "Projet créé avec succès.", data: newProject });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du projet.", error });
  }
};

// 2. Toggle the display status of a project
const updateIsDisplayStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectsModel.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé." });
    }

    const newDisplayStatus = !project.display;

    await ProjectsModel.update(
      { display: newDisplayStatus },
      { where: { id } }
    );

    const updatedProject = await ProjectsModel.findByPk(id);

    res.json({
      message: "Statut d'affichage mis à jour avec succès.",
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut d'affichage.",
      error: error.message || error,
    });
  }
};

// 3. Toggle the archived status of a project
const updateArchivedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await ProjectsModel.update(
      { isArchived: sequelize.literal("NOT isArchived") },
      { where: { id } }
    );

    if (updated) {
      const updatedProject = await ProjectsModel.findByPk(id);
      res.json({
        message: "Statut d'archivage mis à jour avec succès.",
        data: updatedProject,
      });
    } else {
      res.status(404).json({ message: "Projet non trouvé." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut d'archivage.",
      error,
    });
  }
};

// 4. Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ProjectsModel.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: "Projet supprimé avec succès." });
    } else {
      res.status(404).json({ message: "Projet non trouvé." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du projet.", error });
  }
};

// 5. Edit a project
const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      mainImage,
      date,
      projectName,
      content,
      display,
      likes,
      isArchived,
    } = req.body;
    const [updated] = await ProjectsModel.update(
      { date, projectName, content, display, likes, isArchived, mainImage },
      { where: { id } }
    );

    if (updated) {
      const updatedProject = await ProjectsModel.findByPk(id);
      res.json({
        message: "Projet modifié avec succès.",
        data: updatedProject,
      });
    } else {
      res.status(404).json({ message: "Projet non trouvé." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la modification du projet.", error });
  }
};

// 6. Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectsModel.findAll({
      where: {
        display: true,
      },
    });
    res.json({
      message: "Projets récupérés avec succès.",
      data: projects,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des projets.", error });
  }
};

// 7. Get all projects
const getAllProjectsAll = async (req, res) => {
  try {
    const projects = await ProjectsModel.findAll();
    res.json({
      message: "Projets récupérés avec succès.",
      data: projects,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des projets.", error });
  }
};

// 8. Get one project
const getOneProject = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const project = await ProjectsModel.findByPk(id);
    res.json({
      message: "Projet récupéré avec succès.",
      data: project,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des projets.", error });
  }
};

module.exports = {
  getOneProject,
  createProject,
  updateIsDisplayStatus,
  updateArchivedStatus,
  deleteProject,
  editProject,
  getAllProjects,
  getAllProjectsAll,
};
