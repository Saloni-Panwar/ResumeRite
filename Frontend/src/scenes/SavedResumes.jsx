import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material"; // Import the icons
import { useState, useEffect } from "react";
import axios from "axios";

const SavedResumes = () => {
  const theme = useTheme();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resume/saved`);
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };
    fetchResumes();
  }, []);

  const handleView = (templateData) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(templateData);
    newWindow.document.close();
  };

  const handleDelete = async (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/resume/delete/${resumeId}`);
        // Remove the deleted resume from the state
        setResumes(resumes.filter((resume) => resume._id !== resumeId));
        alert("Resume deleted successfully.");
      } catch (error) {
        console.error("Error deleting resume:", error);
        alert("Failed to delete resume.");
      }
    }
  };

  return (
    <Box
      p="2rem"
      sx={{
        width: "95%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "50px",
        border: "1px solid #a8dadc",
        borderRadius: "8px",
        marginBottom: "50px",
      }}
    >
      <Typography variant="h4" mb="1.5rem" color="#608BC1" fontWeight="Bold">
        Saved Resumes
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        {resumes.map((resume) => (
          <Box
            key={resume._id}
            p="1rem"
            border="1px solid #335c67"  // Set inner border to black
            borderRadius="5px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            font-size="50px"
            height="60px"  // Set a fixed height for each resume box
          >
            <Typography variant="h6" sx={{ flex: 1 }}>
              {resume.resumeName}
            </Typography>
            <Box display="flex" gap="0.5rem">
              {/* View icon button */}
              <IconButton
                color="primary"
                onClick={() => handleView(resume.templateData)}
                
              >
                <Visibility />
              </IconButton>

              {/* Delete icon button */}
              <IconButton
                color="error"
                onClick={() => handleDelete(resume._id)}
              >
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SavedResumes;
