


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// ====================================
// User Sign Up
// ====================================
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
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




// ====================================
// Login with Passport.js
// ====================================
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) return next(err);
//     if (!user) return res.status(400).json({ message: info.message });

//     req.logIn(user, (err) => {
//       if (err) return next(err);

//       // Optionally, generate a JWT token here
//       const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "24h" });

//       res.json({ message: "Logged in successfully", user, token });
//     });
//   })(req, res, next);
// });



// Login Route
router.post("/login", (req, res, next) => {
  console.log("Login Request Body:", req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Passport Error:", err);
      return res.status(500).json({ message: "An error occurred during login" });
    }
    if (!user) {
      console.warn("Authentication Failed:", info.message);
      return res.status(400).json({ message: info.message });
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ message: "Failed to log in" });
      }
      res.status(200).json({
        message: "Login successful",
        user: { id: user._id, email: user.email, fullName: user.fullName },
      });
    });
  })(req, res, next);
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

module.exports = router;
