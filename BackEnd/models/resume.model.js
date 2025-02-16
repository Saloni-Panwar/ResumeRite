// const mongoose = require("mongoose");

// const resumeSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   resumeName: { type: String, required: true },
//   templateData: { type: Object, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Resume", resumeSchema);
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  resumeName: { type: String, required: true },
  templateData: { type: String, required: true },
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;