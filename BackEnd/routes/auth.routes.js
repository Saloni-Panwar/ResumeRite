// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const User = require("../models/User");
// const dotenv = require("dotenv");
// const router = express.Router();
// const sendEmail = require('../utils/sendEmail');  
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");
// dotenv.config();



// // JWT Secret
// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
// router.post('/signup', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     console.log("Checking if user exists...");
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("User already exists:", email);
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     console.log("Hashing password...");
//     const hashedPassword = await bcrypt.hash(password, 10);

//     console.log("Creating new user...");
//     const newUser = new User({ firstName, lastName, email, password: hashedPassword });
//     await newUser.save();

//     console.log("Generating JWT token...");
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     const url = `http://localhost:3000/api/auth/confirm/${token}`;
//     console.log("Sending email confirmation...");
//     await sendEmail(newUser.email, 'Confirm your registration', `Click on the link to confirm your registration: ${url}`);

//     res.status(201).json({
//       message: 'User registered successfully. Please check your email to confirm.',
//     });
//   } catch (err) {
//     console.error("Error during signup:", err);
//     res.status(500).json({ message: 'Error creating user', error: err });
//   }
// });


// // ====================================
// // Login with JWT (Without Passport)
// // ====================================
// router.post("/jwt-login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     console.log("Missing fields:", { email, password });
//     return res.status(400).json({ message: "Email and password are required" });
//   }  

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = (await bcrypt.hash(password, user.password)).toString;
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
  
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password).toString();

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     // Send response with the JWT token
//     res.json({
//       success: true, // Add this field
//       message: 'Login successful',
//       token: token
//     });
//   } catch (error) {
//     console.error('Login error:', error); // Log the error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// });



// // ====================================
// // Logout Route
// // ====================================
// router.get("/logout", (req, res) => {
//   req.logout((err) => {
//     if (err) return res.status(500).json({ message: "Error logging out" });
//     res.json({ message: "Logged out successfully" });
//   });
// });

// // ====================================
// // Protected Route Example (JWT)
// // ====================================
// router.get("/protected", (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Expecting Bearer token
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     res.status(200).json({ message: "Access granted", userId: decoded.id });
//   } catch (err) {
//     res.status(403).json({ message: "Invalid or expired token" });
//   }
// });



// let verificationCodes = {}; // Temporary store for verification codes (use Redis/DB for production)

// // Send Verification Code
// router.post("/forgot-password", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const verificationCode = crypto.randomInt(100000,999999).toString();
//     verificationCodes[email] = verificationCode;

//     // Send email with nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: { 
//          user: process.env.EMAIL_USER,
//          pass: process.env.EMAIL_PASS
//          }
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Password Reset Verification Code",
//       text: `Your verification code is ${verificationCode}`,
//     });

//     res.status(200).json({ message: "Verification code sent" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// // Verify Code
// router.post("/verify-code", (req, res) => {
//   const { email, code } = req.body;
//   if (verificationCodes[email] === code) {
//     res.status(200).json({ message: "Code verified successfully" });
//   } else {
//     res.status(400).json({ message: "Invalid verification code" });
//   }
// });

// // Reset Password
// router.post("/reset-password", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.password = await bcrypt.hash(password, 10);
//     await user.save();

//     res.status(200).json({ message: "Password reset successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });


// module.exports = router;

const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", authController.signup);
router.post('/login', authController.login); 
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-code", authController.verifyCode);
router.post("/reset-password", authController.resetPassword);

// Uncomment the logout route if needed
// router.get("/logout", authController.logout);

module.exports = router;
