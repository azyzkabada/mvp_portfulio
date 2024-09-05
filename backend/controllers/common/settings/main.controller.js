const { SettingsModel } = require("../../../models/main.js"); // Assuming the model is exported correctly

// Get Settings
const getSettings = async (req, res) => {
  try {
    // Fetch the settings record from the database
    const settings = await SettingsModel.findOne();
    // console.log(req.body);
    // Check if settings were found
    if (settings) {
      res.json({
        message: "Paramètres récupérés avec succès.",
        data: settings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des paramètres.",
      error: error.message,
    });
  }
};

const editAbout = async (req, res) => {
  // console.log("houni", req.body);
  try {
    const settings = await SettingsModel.findOne({
      where: { id: 1 },
    });

    if (settings) {
      // Met à jour la section 'about' avec les nouvelles données reçues
      const updatedAbout = {
        ...settings.about, // Conserve les valeurs existantes
        ...req.body, // Remplace avec les nouvelles valeurs
      };

      // Met à jour les paramètres dans la base de données
      await settings.update({ about: updatedAbout });

      // Renvoie la réponse avec les paramètres mis à jour
      res.json({
        message: "Paramètres mis à jour avec succès.",
        data: settings,
      });
    } else {
      res.status(404).json({ message: "Paramètres non trouvés." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour des paramètres.",
      error: error.message,
    });
  }
};

// Edit About Section
const editAbout2 = async (req, res) => {
  try {
    const { about } = req.body;
    // console.log(req.body);
    // Update the about section
    const updated = await SettingsModel.update(req.body, {
      where: { id: 1 },
      limit: 1,
    });

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
      error: error.message,
    });
  }
};

// Edit Brand Logo
const editBrandLogo = async (req, res) => {
  try {
    const { logo } = req.body;

    // Fetch current settings to merge with the existing brand data
    const currentSettings = await SettingsModel.findOne();
    if (!currentSettings) {
      return res.status(404).json({ message: "Paramètres non trouvés." });
    }

    const updatedBrand = { ...currentSettings.brand, logo };

    const [updated] = await SettingsModel.update(
      { brand: updatedBrand },
      { where: {}, limit: 1 }
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
      error: error.message,
    });
  }
};

// Edit Display Settings
const editDisplaySettings = async (req, res) => {
  try {
    const { displaySettings } = req.body;

    // Fetch current settings to merge with the existing displaySettings data
    const currentSettings = await SettingsModel.findOne();
    if (!currentSettings) {
      return res.status(404).json({ message: "Paramètres non trouvés." });
    }

    const updatedDisplaySettings = {
      ...currentSettings.displaySettings,
      ...displaySettings,
    };

    const [updated] = await SettingsModel.update(
      { displaySettings: updatedDisplaySettings },
      { where: {}, limit: 1 }
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
      error: error.message,
    });
  }
};

// Generic Edit Settings Function
const editSettings = async (req, res) => {
  try {
    const { about, brand, displaySettings } = req.body;
    const updateData = {};

    // Fetch current settings to merge with the existing data
    const currentSettings = await SettingsModel.findOne();
    if (!currentSettings) {
      return res.status(404).json({ message: "Paramètres non trouvés." });
    }

    if (about) updateData.about = about;
    if (brand) updateData.brand = { ...currentSettings.brand, ...brand };
    if (displaySettings)
      updateData.displaySettings = {
        ...currentSettings.displaySettings,
        ...displaySettings,
      };

    const [updated] = await SettingsModel.update(updateData, {
      where: {},
      limit: 1,
    });

    if (updated) {
      const updatedSettings = await SettingsModel.findOne();
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
      error: error.message,
    });
  }
};

module.exports = {
  editAbout,
  editBrandLogo,
  editDisplaySettings,
  editSettings,
  getSettings,
};
