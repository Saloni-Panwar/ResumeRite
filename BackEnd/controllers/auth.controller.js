// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../models/user.model");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");

// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// const authController = {
//   signup: async (req, res) => {
//     const { firstName, lastName, email, password } = req.body;
//     try {
//       const existingUser = await User.findOne({ email });
//       if (existingUser) return res.status(400).json({ message: "User already exists" });

//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = new User({ firstName, lastName, email, password: hashedPassword });
//       await newUser.save();

//       const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "1h" });
//       const url = `http://localhost:3000/api/auth/confirm/${token}`;
//       await sendEmail(newUser.email, "Confirm your registration", `Click on the link to confirm: ${url}`);

//       res.status(201).json({ message: "User registered successfully. Please check your email to confirm." });
//     } catch (err) {
//       res.status(500).json({ message: "Error creating user", error: err });
//     }
//   },

//   jwtLogin: async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.status(400).json({ message: "User not found" });

//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//       const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//       res.status(200).json({ message: "Login successful", token });
//     } catch (err) {
//       res.status(500).json({ message: "Server error", error: err.message });
//     }
//   },

//   logout: (req, res) => {
//     req.logout((err) => {
//       if (err) return res.status(500).json({ message: "Error logging out" });
//       res.json({ message: "Logged out successfully" });
//     });
//   },

//   forgotPassword: async (req, res) => {

//     const { email } = req.body;
//     const verificationCodes = {};
//     try {
//       if (!email) return res.status(400).json({ message: "Email is required" });

//       const user = await User.findOne({ email });
//       if (!user) return res.status(404).json({ message: "User not found" });

//       const verificationCode = crypto.randomInt(100000, 999999).toString();
//       verificationCodes[email] = verificationCode;

//       await sendEmail(email, "Password Reset Verification Code", `Your code: ${verificationCode}`);
//       res.status(200).json({ message: "Verification code sent successfully" });
//     } catch (error) {
//       console.error("Forgot password error:", error);
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   },

//   resetPassword: async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.status(404).json({ message: "User not found" });

//       user.password = await bcrypt.hash(password, 10);
//       await user.save();

//       res.status(200).json({ message: "Password reset successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error", error });
//     }
//   },
// };

// module.exports = authController;


const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Store verification codes temporarily
const verificationCodes = {};

const authController = {
  signup: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser)
        return res.status(400).json({ message: "User already exists" });

      const newUser = new User({
        firstName,
        lastName,
        email,
        password
      });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
        expiresIn: "1h",
      });
      const url = `http://localhost:3000/api/auth/confirm/${token}`;
      await sendEmail(
        newUser.email,
        "Confirm your registration",
        `Click on the link to confirm: ${url}`
      );

      res
        .status(201)
        .json({
          message:
            "User registered successfully. Please check your email to confirm.",
        });
    } catch (err) {
      res.status(500).json({ message: "Error creating user", error: err });
    }
  },

  jwtLogin: async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log(`Invalid password for user: ${email}`);
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  
      // If successful, send token and user details
      res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
  
  

  logout: (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Error logging out" });
      res.json({ message: "Logged out successfully" });
    });
  },

  forgotPassword: async (req, res) => {
    const { email } = req.body;
    try {
      if (!email) return res.status(400).json({ message: "Email is required" });

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found" });

      const verificationCode = crypto.randomInt(100000, 999999).toString();
      verificationCodes[email] = verificationCode;

      await sendEmail(
        email,
        "Password Reset Verification Code",
        `Your code: ${verificationCode}`
      );
      res.status(200).json({ message: "Verification code sent successfully" });
    } catch (error) {
      console.error("Forgot password error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  verifyCode: async (req, res) => {
    const { email, code } = req.body;
    try {
      if (!email || !code)
        return res.status(400).json({ message: "Email and code are required" });

      const storedCode = verificationCodes[email];
      if (!storedCode)
        return res
          .status(404)
          .json({ message: "No verification code found for this email" });

      if (storedCode !== code)
        return res.status(400).json({ message: "Invalid verification code" });

      delete verificationCodes[email]; // Remove code after successful verification
      res.status(200).json({ message: "Verification successful" });
    } catch (error) {
      console.error("Verify code error:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  resetPassword: async (req, res) => {
    const { email, newPassword } = req.body;

  try {
    

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

user.password = newPassword;
await user.save();

    // Send a success response
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
  },

  // Authentication Middleware
  authenticate: (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: "Invalid token" });
    }
  },
};

module.exports = authController;
