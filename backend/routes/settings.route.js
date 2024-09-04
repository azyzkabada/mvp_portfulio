const express = require("express");
const {
  getSettings,
  editAbout,
  editBrandLogo,
  editDisplaySettings,
  editSettings,
} = require("../controllers/common/settings/main.controller");

const router = express.Router();

// get all setting
router.get("/settings", getSettings);

//  edit the about section
router.put("/settings/edit-about", editAbout);

//  edit the brand logo
router.put("/settings/edit-brand-logo", editBrandLogo);

//  edit display settings
router.put("/settings/edit-display-settings", editDisplaySettings);

// edit multiple settings
router.put("/settings", editSettings);

module.exports = router;
