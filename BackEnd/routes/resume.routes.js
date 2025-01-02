const express = require("express");
const router = express.Router();
const {
  saveResume,
  getResumes,
  deleteResume,
  getSavedResumes
} = require("../controllers/resume.controller");
const multer = require("multer");

const upload = multer(); // Set up multer (in memory storage)

router.post("/save", upload.none(), saveResume); // Use router.post() instead of app.post()
router.get("/saved", getResumes); // Fetch saved resumes



// Delete a resume
router.delete("/delete/:id", deleteResume);


module.exports = router; 