// const express = require("express");
// const resumeController = require("../controllers/resume.controller");
// const router = express.Router();

// // Save resume
// router.post("/save", resumeController.saveResume);

// // Get resume by ID
// router.get("/:id", resumeController.getResumeById);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { saveResume } = require("../controllers/resume.controller");
const multer = require('multer');

const upload = multer(); // Set up multer (in memory storage)

router.post('/save', upload.none(), saveResume); // Use router.post() instead of app.post()


module.exports = router;
