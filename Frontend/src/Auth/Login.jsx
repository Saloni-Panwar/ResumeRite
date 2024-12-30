import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Regex for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError(""); // Clear error if valid
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    if (!passwordError && email && password) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
          email,
          password,
        });
        const { token } = response.data;
  
        if (response.data.message) {
          localStorage.setItem("token", token); // Store the token
          setIsLoggedIn(true); // Update state
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error("Login failed:", error.response || error.message);
        alert("Error during login. Please try again.");
      }
    }
  };
  
  

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.neutral.main,
      }}
    >
      <Box
        display="flex"
        width="70%"
        maxWidth="900px"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        overflow="hidden"
        border={`3px solid ${theme.palette.neutral.light}`}
      >
        {/* Login Section */}
        <Box
          flex={1}
          p="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: theme.palette.background.alt }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="2rem"
            sx={{ color: theme.palette.primary.main }}
          >
            Login to Your Account
          </Typography>
          <Box component="form" onSubmit={handleLogin} width="100%" maxWidth="400px">
            {/* Email Field */}
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              margin="normal"
              required
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailError)}
              helperText={emailError}
              InputLabelProps={{
                required: true,
                sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.neutral.main,
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
                    borderColor: theme.palette.neutral.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            {/* Remember Me */}
            <FormControlLabel
              control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
              label="Remember me"
            />
            {/* Forgot Password */}
            <Typography
              variant="body2"
              align="right"
              sx={{
                cursor: "pointer",
                mt: "0.5rem",
                mb:"0.5rem",

                color: theme.palette.primary.main,
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </Typography>
            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt:"0.8rem",
                me: "1rem",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>

        {/* Signup Section */}
        <Box
          flex={1}
          p="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: theme.palette.primary.light }}
        >
          <Typography variant="h5" color="textSecondary" mb="1rem">
            New Here?
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate("/signup")}
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
