const Resume = require("../models/resume.model");

const saveResume = async (req, res) => {
  const { resumeName, templateData } = req.body;


  try {
    // Create a new Resume object
    const newResume = new Resume({
      user: req.user ? req.user.id : null, // Optional: Link to user if logged in
      resumeName,
      templateData, // Store template data here
    });
    console.log("Template Data Size:", Buffer.byteLength(templateData, 'utf8')); 

    // Save the resume to the database
    await newResume.save();

    const resumeLink = `http://localhost:3001/api/resume/${newResume._id}`;
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

module.exports = { saveResume };
