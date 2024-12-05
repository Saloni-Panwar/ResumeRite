// SIGNUP
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (!passwordError && firstName && lastName && email && password) {
      try {
        const response = await axios.post("/api/signup", { firstName, lastName, email, password });
        if (response.data.success) {
          console.log("Sign-up successful");
          navigate("/login"); // Redirect to login after successful sign-up
        } else {
          alert("Error creating account");
        }
      } catch (error) {
        console.error("Sign-up failed", error);
        alert("Error during sign-up. Please try again.");
      }
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
          backgroundColor: theme.palette.primary.light,
          padding: "2rem",
        }}
      >
        <Typography variant="h4" mb="1rem" color="textPrimary">
          Create Your Account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignUp}
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          maxWidth="400px"
        >
          <TextField
            fullWidth
            label="First Name"
            margin="normal"
            variant="outlined"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ "& .MuiOutlinedInput-root": { borderColor: theme.palette.primary.main } }}
          />
          <TextField
            fullWidth
            label="Last Name"
            margin="normal"
            variant="outlined"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{ "& .MuiOutlinedInput-root": { borderColor: theme.palette.primary.main } }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ "& .MuiOutlinedInput-root": { borderColor: theme.palette.primary.main } }}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
            sx={{ "& .MuiOutlinedInput-root": { borderColor: theme.palette.primary.main } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "1rem",
              backgroundColor: theme.palette.primary.main,
              ":hover": { backgroundColor: theme.palette.primary.dark },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;