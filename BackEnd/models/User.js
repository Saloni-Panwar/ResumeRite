// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// // Hash password before saving
// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define User Schema
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  // Skip hashing if the password hasn't been modified
  if (!this.isModified("password")) return next(); // Only hash if password is new/modified

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (err) {
    next(err); // Pass errors to the next middleware
  }
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
