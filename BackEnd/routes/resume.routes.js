const express = require("express");
const resumeController = require("../controllers/resume.controller");
const router = express.Router();

router.post("/create", resumeController.createResume);
router.get("/:resumeId", resumeController.getResumeById);
router.post("/send-link", resumeController.sendResumeLink);

module.exports = router;
