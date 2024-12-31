
// const express = require("express");
// const router = express.Router();
// const { saveResume  } = require("../controllers/resume.controller");
// const multer = require('multer');

// const upload = multer(); // Set up multer (in memory storage)

// router.post('/save', upload.none(), saveResume); // Use router.post() instead of app.post()

// module.exports = router;

const express = require("express");
const router = express.Router();
const { saveResume, getAllResumes } = require("../controllers/resume.controller");

router.post('/save', saveResume);
router.get("/all", getAllResumes);

module.exports = router;
