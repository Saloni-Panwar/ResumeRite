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
    console.log("Template Data Size:", Buffer.byteLength(templateData, "utf8"));

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
    res
      .status(500)
      .json({ message: "Error saving resume", error: error.message });
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

// Get a single resume for editing
const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);
    if (!resume) return res.status(404).json({ message: "Resume not found." });
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resume.", error });
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

// Update a resume (edit functionality)
const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const { resumeName, templateData } = req.body;
    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { resumeName, templateData },
      { new: true }
    );
    if (!updatedResume)
      return res.status(404).json({ message: "Resume not found." });
    res.status(200).json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: "Error updating resume.", error });
  }
};

module.exports = {
  saveResume,
  getResumes,
  getResumeById,
  deleteResume,
  updateResume,
};
