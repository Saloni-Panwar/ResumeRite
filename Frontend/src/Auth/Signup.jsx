// export default SignUpPage;
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError(""); // Clear error if valid
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!passwordError) {
      console.log("Sign-up form submitted");
      navigate("/");
    } else {
      console.log("Please fix errors before submitting.");
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
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
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
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
          Login
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
          backgroundColor: theme.palette.background.alt,
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
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
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
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
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
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
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
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
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