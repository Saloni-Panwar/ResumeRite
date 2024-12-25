// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const session = require('express-session'); // Import express-session
// const authRoutes = require('./routes/authRoutes');
// const passport = require("./config/passport"); // Path to your passport.js

// dotenv.config();

// const app = express();

// // Middleware for parsing request bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3001', // Frontend URL
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   }));
//   app.use(bodyParser.json());

// // Session configuration
// app.use(
//     session({
//         secret: "your_secret_key", // Replace with a secure secret
//         resave: false,
//         saveUninitialized: false,
//     })
// );

// // Initialize Passport and use sessions
// app.use(passport.initialize());
// app.use(passport.session());

// // Database Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const resumeRoutes = require("./routes/resume.routes");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3001", methods: ["GET", "POST"], allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(
  session({ secret: "your_secret_key", resave: false, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
