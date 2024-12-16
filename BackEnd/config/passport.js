const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Adjust path if necessary

// Passport Local Strategy
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Using email as the identifier
    async (email, password, done) => {
      try {
        // Find the user by email
        const user = await User.findOne({ email });
        
        // If the user is not found, return with an error
        if (!user) {
          return done(null, false, { message: "Incorrect email or password." });
        }

        // Compare the password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: "Incorrect email or password." });
        }

        console.log("Authentication Successful:", user);
        // If the password matches, authentication is successful
        return done(null, user);
      } catch (err) {
        console.error("Error in Strategy:", err);
        // Handle errors during the authentication process
        return done(err);
      }
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  User.findById(id, (err, user) => done(err, user))
);
module.exports = passport;
