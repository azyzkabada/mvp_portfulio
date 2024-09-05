const express = require("express");
const {
  createMessage,
  updateArchiveStatus,
  updateReadStatus,
  getMessages,
} = require("../controllers/common/messages/main.controller"); //

const router = express.Router();

// create a new message
router.post("/messages", createMessage);

// get all messages
router.get("/messages", getMessages);

// toggle the archive status
router.patch("/messages/:id/toggle-archive", updateArchiveStatus);

// toggle the read status
router.patch("/messages/:id/toggle-read", updateReadStatus);

module.exports = router;
