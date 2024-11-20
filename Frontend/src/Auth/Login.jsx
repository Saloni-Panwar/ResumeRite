import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3000/api/auth/login", {
  //       email: formData.email,
  //       password: formData.password,
  //     });
  //     console.log("Form Data:", formData);
      
  //     alert(response.data.message);

  //     // Save the token in localStorage for future use
  //     localStorage.setItem("authToken", response.data.token);

  //     // Navigate to the home page after successful login
  //     navigate("/");
  //   } catch (error) {
    
  //     console.error(error);
  //     alert(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
        const response = await axios.post("http://localhost:3000/api/auth/login", {
            email: formData.email,
            password: formData.password,
        });
        console.log("Response:", response.data);

        alert(response.data.message);
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
    } catch (error) {
        console.error("Error Response:", error.response);
        alert(error.response?.data?.message || "Something went wrong");
    }
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
        LOGIN
      </Typography>
      <Box component="form" onSubmit={handleSubmit} maxWidth="400px" width="100%">
        {/* Email/Username Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
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
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
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
