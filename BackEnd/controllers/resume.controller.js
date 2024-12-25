const Resume = require("../models/resume.model");
const User = require("../models/user.model");

const resumeController = {
  // Create a new resume for the user
  createResume: async (req, res) => {
    const { resumeData } = req.body;
    const userId = req.user.id; // Assuming the user is logged in

    try {
      const newResume = new Resume({
        userId,
        resumeData,
      });
      await newResume.save();
      res.status(201).json({ message: "Resume created successfully", resumeId: newResume._id });
    } catch (err) {
      res.status(500).json({ message: "Error creating resume", error: err });
    }
  },

  // Get the resume by its ID
  getResumeById: async (req, res) => {
    const { resumeId } = req.params;

    try {
      const resume = await Resume.findById(resumeId).populate("userId", "firstName lastName email");
      if (!resume) return res.status(404).json({ message: "Resume not found" });

      res.status(200).json(resume);
    } catch (err) {
      res.status(500).json({ message: "Error fetching resume", error: err });
    }
  },

  // Send a link to the user's resume via email
  sendResumeLink: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      const resume = await Resume.findOne({ userId: user._id });
      if (!resume) return res.status(404).json({ message: "Resume not found" });

      const resumeLink = `${process.env.FRONTEND_URL}/resume/${resume._id}`;

      await sendEmail(
        email,
        "Your Resume Link",
        `Click on the following link to view your resume: ${resumeLink}`
      );

      res.status(200).json({ message: "Resume link sent successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error sending resume link", error: err });
    }
  },
};

module.exports = resumeController;
