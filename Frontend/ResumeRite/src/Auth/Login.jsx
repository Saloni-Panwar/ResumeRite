// LoginPage.jsx
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Login form submitted");

    // After successful login, navigate to the home page
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
        Login to ResumeRite
      </Typography>
      <Box component="form" onSubmit={handleLogin} maxWidth="400px" width="100%">
        {/* Email/Username Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email or Username"
          type="text"
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

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />

        {/* Forgot Password Link */}
        <Typography
          variant="body2"
          color="primary"
          onClick={() => console.log("Navigate to forgot password page")}
          sx={{ cursor: "pointer", mt: "1rem" }}
        >
          Forgot Password?
        </Typography>

        {/* Login Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "1rem" }}
        >
          Login
        </Button>

        {/* Sign Up Link */}
        <Typography
          variant="body2"
          color="primary"
          sx={{ cursor: "pointer", mt: "1rem" }}
          onClick={() => navigate("/signup")} // Navigate to the SignUpPage
        >
          Don't have an account? Sign up here.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
