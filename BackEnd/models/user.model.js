// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// // Define User schema
// const userSchema = new mongoose.Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Hash password before saving
// userSchema.pre("save", async function (next) {
//   // Skip hashing if the password hasn't been modified
//   if (!this.isModified("password")) return next(); // Only hash if password is new/modified

//   try {
//     const salt = await bcrypt.genSalt(10); // Generate a salt
//     this.password = await bcrypt.hash(this.password, salt); // Hash the password
//     next();
//   } catch (err) {
//     next(err); // Pass errors to the next middleware
//   }
// });

// // Export the model
// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", userSchema);
