const express = require("express");
const resumeController = require("../controllers/resume.controller");
const router = express.Router();

// Save resume
router.post("/save", resumeController.saveResume);

// Get resume by ID
router.get("/:id", resumeController.getResumeById);

module.exports = router;
