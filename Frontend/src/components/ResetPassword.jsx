// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTheme } from "@mui/material/styles"; 


// const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { email } = location.state;
//   const theme = useTheme();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
//     try {
//       await axios.post("http://localhost:3000/api/auth/reset-password", { email, password });
//       alert("Password reset successfully");
//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error resetting password");
//     }
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//       flexDirection="column"
//     >
//         <Typography variant="h4" mb={2} fontWeight={"bold"} sx={{ color: theme.palette.primary.main }}>
//         Reset Password
//             </Typography>

//       <form onSubmit={handleSubmit} style={{ width: "300px" }}>
//         <TextField
//           fullWidth
//           label="New Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           margin="normal"
//           InputLabelProps={{
//             required: true,
//             sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//           }}
//         />
//         <TextField
//           fullWidth
//           label="Confirm Password"
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//           margin="normal"
//           InputLabelProps={{
//             required: true,
//             sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//           }}
//         />
//         {error && <Typography color="error">{error}</Typography>}
//         <Button type="submit" variant="contained" fullWidth>
//           Reset Password
//         </Button>
//       </form>
//       <a href="/login" className="link">← Back to log in</a>

//     </Box>
//   );
// };

// export default ResetPassword;




import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Handle undefined state
  const theme = useTheme();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("Email is missing. Please try again.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/reset-password", {
        email,
        newPassword,
      });
      alert(response.data.message); // Display success message from server
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        mb={2}
        fontWeight="bold"
        sx={{ color: theme.palette.primary.main }}
      >
        Reset Password
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
        <TextField
          fullWidth
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          margin="normal"
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          margin="normal"
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />
        {error && (
          <Typography color="error" mt={1} mb={2}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth>
          Reset Password
        </Button>
      </form>

      <Link href="/login" underline="none" mt={2}>
        ← Back to Log In
      </Link>
    </Box>
  );
};

export default ResetPassword;
