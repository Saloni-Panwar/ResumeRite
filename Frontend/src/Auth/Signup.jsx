import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const theme = useTheme(); // Access the current theme

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("Sign-up form submitted");
    navigate("/"); // Navigate to the home page after sign-up
  };

  return (
    <Box
      display="flex"
      height="100vh"
      sx={{
        backgroundColor: theme.palette.background.default, // Dynamic background
        color: theme.palette.text.primary, // Dynamic text color
      }}
    >
      {/* Left Section */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.primary.main, // Dynamic primary color
          color: theme.palette.primary.contrastText, // Adjust text for contrast
        }}
      >
        <Typography variant="h3" fontWeight="bold" mb="1rem">
          Welcome Back
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.background.alt,
            },
          }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </Button>
      </Box>

      {/* Right Section */}
      <Box
        flex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.background.alt, // Dynamic alt background
          padding: "2rem",
          color: theme.palette.text.primary,
        }}
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
              style: { color: theme.palette.text.secondary },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
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
              style: { color: theme.palette.text.secondary },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
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
              style: { color: theme.palette.text.secondary },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
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
              style: { color: theme.palette.text.secondary },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
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
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
