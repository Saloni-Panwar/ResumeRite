const express = require("express");
const router = express.Router();
const {
  saveResume,
  getResumes,
  getResumeById,
  deleteResume,
  updateResume,
} = require("../controllers/resume.controller");
const multer = require("multer");

const upload = multer(); // Set up multer (in memory storage)

router.post("/save", upload.none(), saveResume); // Use router.post() instead of app.post()
router.get("/saved", getResumes); // Fetch saved resumes

// Fetch a single resume by ID
router.get("/:id", getResumeById);

// Delete a resume
router.delete("/delete/:id", deleteResume);

// Update a resume
router.put("/update/:id", updateResume);
module.exports = router;
