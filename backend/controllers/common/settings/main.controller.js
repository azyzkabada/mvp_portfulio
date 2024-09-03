const { SettingsModel } = require("../../../models/main.js");

// Edit About Section
const editAbout = async (req, res) => {
  try {
    const { about } = req.body;

    const [updated] = await SettingsModel.update(
      { about },
      { where: {}, limit: 1 } // Assuming there's only one settings record
    );

    if (updated) {
      const updatedSettings = await SettingsModel.findOne();
      res.json({
        message: 'Section "about" mise à jour avec succès.',
        data: updatedSettings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la mise à jour de la section "about".',
      error,
    });
  }
};

// Edit Brand Logo
const editBrandLogo = async (req, res) => {
  try {
    const { logo } = req.body;

    const [updated] = await SettingsModel.update(
      { brand: { logo } },
      { where: {}, limit: 1 } // Assuming there's only one settings record
    );

    if (updated) {
      const updatedSettings = await SettingsModel.findOne();
      res.json({
        message: "Logo de la marque mis à jour avec succès.",
        data: updatedSettings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour du logo de la marque.",
      error,
    });
  }
};

// Edit Display Settings
const editDisplaySettings = async (req, res) => {
  try {
    const { displaySettings } = req.body;

    const [updated] = await SettingsModel.update(
      { displaySettings },
      { where: {}, limit: 1 } // Assuming there's only one settings record
    );

    if (updated) {
      const updatedSettings = await SettingsModel.findOne();
      res.json({
        message: "Paramètres d'affichage mis à jour avec succès.",
        data: updatedSettings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des paramètres d'affichage.",
      error,
    });
  }
};

// Generic Edit Settings Function
const editSettings = async (req, res) => {
  try {
    const { about, brand, displaySettings } = req.body;
    const updateData = {};

    if (about) updateData.about = about;
    if (brand) updateData.brand = brand;
    if (displaySettings) updateData.displaySettings = displaySettings;

    const [updated] = await Settings.update(
      updateData,
      { where: {}, limit: 1 } 
    );

    if (updated) {
      const updatedSettings = await Settings.findOne();
      res.json({
        message: "Paramètres mis à jour avec succès.",
        data: updatedSettings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des paramètres.",
      error,
    });
  }
};

module.exports = {
  editAbout,
  editBrandLogo,
  editDisplaySettings,
  editSettings,
};
