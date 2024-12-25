const Resume = require("../models/resume.model");

const resumeController = {
  saveResume: async (req, res) => {
    const { resumeName, templateData } = req.body;

    try {
      const newResume = new Resume({
        user: req.user ? req.user.id : null, // Only link user if logged in
        resumeName,
        templateData,
      });

      await newResume.save();

      const resumeLink = `http://localhost:3001/api/resume/${newResume._id}`;
      res.status(201).json({
        message: "Resume saved successfully",
        resumeLink,
      });
    } catch (error) {
      res.status(500).json({ message: "Error saving resume", error });
    }
  },

  getResumeById: async (req, res) => {
    const { id } = req.params;

    try {
      const resume = await Resume.findById(id);
      if (!resume) {
        return res.status(404).json({ message: "Resume not found" });
      }

      res.status(200).json(resume);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving resume", error });
    }
  },
};

module.exports = resumeController;
