// export default LoginPage;
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted");
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: "#f5f5f5" }} // Light grey background
    >
      <Box
        display="flex"
        width="70%"
        maxWidth="900px"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        overflow="hidden"
      >
        {/* Login Section */}
        <Box
          flex={1}
          p="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "#ffffff" }}
        >
          <Typography variant="h4" color="primary" fontWeight="bold" mb="2rem">
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
            {/* Remember Me */}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember me"
            />
            {/* Forgot Password */}
            <Typography
              variant="body2"
              color="primary"
              align="right"
              sx={{ cursor: "pointer", mt: "0.5rem" }}
              onClick={() => console.log("Forgot Password")}
            >
              Forgot Password?
            </Typography>
            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: "1rem" }}
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
          sx={{ backgroundColor: "#e3f2fd" }} // Light blue background
        >
          <Typography variant="h5" color="textSecondary" mb="1rem">
            New Here?
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/signup")}
            sx={{
              borderColor: "#1976d2",
              color: "#1976d2",
              ":hover": {
                backgroundColor: "#608BC1",
                color: "#ffffff",
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
