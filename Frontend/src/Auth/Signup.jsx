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
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p="2rem"
    >
      <Typography variant="h4" color="primary" mb="2rem">
        Sign Up for ResumeRite
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
        />

        {/* Email Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          margin="normal"
          required
        />

        {/* Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          margin="normal"
          required
        />

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          type="password"
          margin="normal"
          required
        />

        {/* Sign Up Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "1rem" }}
        >
          Sign Up
        </Button>

        {/* Link to Login Page */}
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", mt: "1rem" }}
          onClick={() => navigate("/login")}
        >
          Already have an account? Log in here.
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpPage;
