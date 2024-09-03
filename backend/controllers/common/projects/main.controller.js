const { ProjectsModel } = require("../../../models/main.js");

// 1. Create a new project
const createProject = async (req, res) => {
  try {
    const { date, projectName, content } = req.body;
    const newProject = await Projects.create({ date, projectName, content });
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
    const [updated] = await Projects.update(
      { display: sequelize.literal("NOT display") },
      { where: { id } }
    );

    if (updated) {
      const updatedProject = await Projects.findByPk(id);
      res.json({
        message: "Statut d'affichage mis à jour avec succès.",
        data: updatedProject,
      });
    } else {
      res.status(404).json({ message: "Projet non trouvé." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du statut d'affichage.",
      error,
    });
  }
};

// 3. Toggle the archived status of a project
const updateArchivedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Projects.update(
      { isArchived: sequelize.literal("NOT isArchived") },
      { where: { id } }
    );

    if (updated) {
      const updatedProject = await Projects.findByPk(id);
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
    const deleted = await Projects.destroy({ where: { id } });

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
    const { date, projectName, content, display, likes, isArchived } = req.body;
    const [updated] = await Projects.update(
      { date, projectName, content, display, likes, isArchived },
      { where: { id } }
    );

    if (updated) {
      const updatedProject = await Projects.findByPk(id);
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

module.exports = {
  createProject,
  updateIsDisplayStatus,
  updateArchivedStatus,
  deleteProject,
  editProject,
};
