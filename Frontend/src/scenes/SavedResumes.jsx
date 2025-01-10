import { Box, Typography, IconButton, useTheme, Dialog, DialogContent } from "@mui/material";
import { Visibility, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";

const SavedResumes = () => {
  const theme = useTheme();
  const [resumes, setResumes] = useState([]);
  const [previewData, setPreviewData] = useState(null); // For handling preview modal
  const [isPreviewOpen, setPreviewOpen] = useState(false);

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
    setPreviewData(templateData); // Set the data to display in the modal
    setPreviewOpen(true);
  };

  const handleDelete = async (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/resume/delete/${resumeId}`);
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
            border="1px solid #335c67"
            borderRadius="5px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            font-size="50px"
            height="60px"
          >
            <Typography variant="h6" sx={{ flex: 1 }}>
              {resume.resumeName}
            </Typography>
            <Box display="flex" gap="0.5rem">
              {/* View icon button */}
              <IconButton color="primary" onClick={() => handleView(resume.templateData)}>
                <Visibility />
              </IconButton>

              {/* Delete icon button */}
              <IconButton color="error" onClick={() => handleDelete(resume._id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Preview Modal */}
      <Dialog open={isPreviewOpen} onClose={() => setPreviewOpen(false)} maxWidth="lg" fullWidth>
        <DialogContent>
          <Box
            id="preview-content"
            dangerouslySetInnerHTML={{ __html: previewData }}
            sx={{
              padding: "1rem",
              backgroundColor: "#fff",
              borderRadius: "5px",
              overflow: "auto",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SavedResumes;

