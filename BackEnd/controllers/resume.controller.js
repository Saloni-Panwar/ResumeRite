const Resume = require("../models/resume.model");

const saveResume = async (req, res) => {
  const { resumeName, templateData } = req.body;


  try {
    // Create a new Resume object
    const newResume = new Resume({
      // user: req.user ? req.user.id : null, // Optional: Link to user if logged in
      user: req.user._id, // Assuming user authentication is implemented
      resumeName,
      templateData, // Store template data here
    });
    console.log("Template Data Size:", Buffer.byteLength(templateData, 'utf8')); 

    // Save the resume to the database
    await newResume.save();

    const resumeLink = `${process.env.REACT_APP_BACKEND_URL}api/resume/${newResume._id}`;
    res.status(201).json({
      message: "Resume saved successfully",
      resumeLink,
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error saving resume:", error);
    res.status(500).json({ message: "Error saving resume", error: error.message });
  }
};

const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user ? req.user.id : null });
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: "Error fetching resumes", error: error.message });
  }
};


module.exports = { saveResume, getResumes };
