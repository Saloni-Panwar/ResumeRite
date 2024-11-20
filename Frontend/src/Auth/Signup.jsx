// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom"; 

// const SignUpPage = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     console.log("Sign-up form submitted");
//     // After successful sign-up, navigate to the home page
//     navigate("/");
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       p="2rem"
//     >
//       <Typography variant="h4" color="primary" mb="2rem">
//         SIGN UP
//       </Typography>
//       <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
//         {/* Name Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Full Name"
//           type="text"
//           margin="normal"
//           required
//         />

//         {/* Email Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Email"
//           type="email"
//           margin="normal"
//           required
//         />

//         {/* Password Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Password"
//           type="password"
//           margin="normal"
//           required
//         />

//         {/* Confirm Password Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Confirm Password"
//           type="password"
//           margin="normal"
//           required
//         />

//         {/* Sign Up Button */}
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: "1rem" }}
//         >
//           Sign Up
//         </Button>

//         {/* Link to Login Page */}
//         <Typography
//           variant="body2"
//           color="primary"
//           sx={{ cursor: "pointer", mt: "1rem" }}
//           onClick={() => navigate("/login")}
//         >
//           Already have an account? Log in here.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default SignUpPage;








import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message);
      // Navigate to the home page after successful sign-up
      navigate("/");
    } catch (error) {
      console.error(error);
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
        SIGN UP
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="400px"
        width="100%"
      >
        {/* Full Name Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
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

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
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
