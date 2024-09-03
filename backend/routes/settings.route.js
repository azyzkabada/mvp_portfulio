const express = require("express");
const {
  editAbout,
  editBrandLogo,
  editDisplaySettings,
  editSettings,
} = require("../controllers/common/settings/main.controller");

const router = express.Router();

//  edit the about section
router.patch("/settings/edit-about", editAbout);

//  edit the brand logo
router.patch("/settings/edit-brand-logo", editBrandLogo);

//  edit display settings
router.patch("/settings/edit-display-settings", editDisplaySettings);

// edit multiple settings
router.patch("/settings", editSettings);

module.exports = router;
