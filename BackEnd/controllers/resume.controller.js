const Resume = require("../models/resume.model");

const saveResume = async (req, res) => {
  
  const { resumeName, templateData } = req.body;

  console.log("Incoming Request:", req.body); // Log request body
  console.log("User Info:", req.user); // Log user info

  if (!resumeName || !templateData) {
    return res.status(400).json({ message: "resumeName and templateData are required." });
  }

  try {
    const newResume = new Resume({
      user: req.user._id, // Assuming authentication middleware adds req.user
      resumeName,
      templateData,
    });

    console.log("Saving Resume:", newResume); // Log before saving
    await newResume.save();

    const resumeLink = `${process.env.REACT_APP_BACKEND_URL}/api/resume/${newResume._id}`;
    res.status(201).json({
      message: "Resume saved successfully",
      resumeLink,
    });
  } catch (error) {
    console.error("Error saving resume:", error.message); // Log error
    res.status(500).json({ message: "Error saving resume", error: error.message });
  }
};


const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user ? req.user.id : null });
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res
      .status(500)
      .json({ message: "Error fetching resumes", error: error.message });
  }
};



exports.getSavedResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id }); // Assuming authentication
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching saved resumes:", error);
    res.status(500).json({ message: "Error fetching saved resumes." });
  }
};



// Delete a resume
const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedResume = await Resume.findByIdAndDelete(id);
    if (!deletedResume)
      return res.status(404).json({ message: "Resume not found." });
    res.status(200).json({ message: "Resume deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resume.", error });
  }
};




module.exports = {
  saveResume,
  getResumes,
  deleteResume,
  
};
