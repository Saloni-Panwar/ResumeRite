const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const dotenv = require("dotenv");
const router = express.Router();
const sendEmail = require('../utils/sendEmail');  
const nodemailer = require("nodemailer");
const crypto = require("crypto");
dotenv.config();


// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";


router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Generate JWT token for email confirmation
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Create confirmation URL
    const url = `http://localhost:5000/api/auth/confirm/${token}`;

    // Send confirmation email to user
    await sendEmail(newUser.email, 'Confirm your registration', `Click on the link to confirm your registration: ${url}`);

    // Respond to the client
    res.status(201).json({
      message: 'User registered successfully. Please check your email to confirm.',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

// ====================================
// Login with JWT (Without Passport)
// ====================================
router.post("/jwt-login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("Missing fields:", { email, password });
    return res.status(400).json({ message: "Email and password are required" });
  }
  

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
  
});





router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    console.log(user); // Log the user object to see if it's retrieved properly.

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response with the JWT token
    res.json({
      message: 'Login successful',
      token, // Send the token to the client
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




// ====================================
// Logout Route
// ====================================
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Error logging out" });
    res.json({ message: "Logged out successfully" });
  });
});

// ====================================
// Protected Route Example (JWT)
// ====================================
router.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting Bearer token
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ message: "Access granted", userId: decoded.id });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
});



let verificationCodes = {}; // Temporary store for verification codes (use Redis/DB for production)

// Send Verification Code
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const verificationCode = crypto.randomInt(100000, 999999).toString();
    verificationCodes[email] = verificationCode;

    // Send email with nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Verification Code",
      text: `Your verification code is ${verificationCode}`,
    });

    res.status(200).json({ message: "Verification code sent" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Verify Code
router.post("/verify-code", (req, res) => {
  const { email, code } = req.body;

  if (verificationCodes[email] === code) {
    return res.status(200).json({ message: "Code verified" });
  } else {
    return res.status(400).json({ message: "Invalid code" });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne({ email }, { password: hashedPassword });

    delete verificationCodes[email]; // Remove the code after reset
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});



module.exports = router;
