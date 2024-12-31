const Resume = require("../models/resume.model");

const saveResume = async (req, res) => {
  const { resumeName, resumeData } = req.body;


  try {
    // Create a new Resume object
    const newResume = new Resume({
      user: req.user ? req.user.id : null, // Optional: Link to user if logged in
      resumeName,
      templateData: resumeData, // Store template data here
    });
    console.log("Template Data Size:", Buffer.byteLength(resumeData, 'utf8')); 

    // Save the resume to the database
    await newResume.save();

    const resumeLink = `${process.env.REACT_APP_BACKEND_URL}/api/resume/${newResume._id}`;
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

const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find(); // Fetch all resumes
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: "Error fetching resumes" });
  }
};
module.exports = { saveResume ,getAllResumes };
