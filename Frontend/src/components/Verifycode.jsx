import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; 



const VerifyCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state;
  const theme = useTheme();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/verify-code`, { email, code });
      alert("Code verified successfully");
      navigate("/reset-password", { state: { email } });
    } catch (err) {
      setError(err.response?.data?.message || "Invalid verification code");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
       <Typography variant="h4" mb={2} fontWeight={"bold"} sx={{ color: theme.palette.primary.main }}>
       Verify Code

            </Typography>

      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <TextField
          fullWidth
          label="Verification Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          margin="normal"
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
      <a href="/login" className="link">← Back to log in</a>

    </Box>
  );
};

export default VerifyCode;
