
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("Sign-up form submitted");
    // After successful sign-up, navigate to the home page
    navigate("/");
  };

  return (
    <Box
      display="flex"
      height="100vh"
      sx={{ backgroundColor: "#f5f5f5" }} // Light grey background
    >
<<<<<<< HEAD:Frontend/ResumeRite/src/Auth/Signup.jsx
      {/* Left Section */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#608BC1", color: "#ffffff" }} // Blue background
      >
        <Typography variant="h4" fontWeight="bold" mb="1rem">
          Welcome Back
        </Typography>
=======
      <Typography variant="h4" color="primary" mb="2rem">
        SIGN UP
      </Typography>
      <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
        {/* Name Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Full Name"
          type="text"
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          type="password"
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Sign Up Button */}
>>>>>>> origin/main:Frontend/src/Auth/Signup.jsx
        <Button
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#608BC1",
            color: "#ffffff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#608BC1",
            },
          }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </Button>
      </Box>

      {/* Right Section */}
      <Box
        flex={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "#ffffff", padding: "2rem" }}
      >
        <Typography variant="h4" color="primary" fontWeight="bold" mb="2rem">
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
          {/* First Name Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            type="text"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
          />
          {/* Last Name Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            type="text"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
          />
          {/* Email Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
          />
          {/* Password Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
          />
          {/* Sign Up Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "1rem", backgroundColor: "#608BC1" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
