// import { Box, Typography, Button, useTheme } from "@mui/material";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const SavedResumes = () => {
//   const theme = useTheme();
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resume/saved`);
//         console.log("Fetched Resumes:", response.messagey);
//         setResumes(response.data);
//       } catch (error) {
//         console.error("Error fetching resumes:", error);
//       }
//     };
//     fetchResumes();
//   }, []);
  

//   const handleView = (templateData) => {
//     const newWindow = window.open("", "_blank");
//     newWindow.document.write(templateData);
//     newWindow.document.close();
//   };

//   return (
//     <Box
//       p="2rem"
//       sx={{
//         width: "100%",
//         maxWidth: "98%",
//         margin: "0 auto",
//         marginTop: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <Typography variant="h4" mb="1.5rem">
//         Saved Resumes
//       </Typography>
//       <Box display="flex" flexDirection="column" gap="1rem">
//         {resumes.map((resume) => (
//           <Box
//             key={resume._id}
//             p="1rem"
//             border="1px solid"
//             borderColor={theme.palette.divider}
//             borderRadius="8px"
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography variant="h6">{resume.resumeName}</Typography>
//             <Button
//               variant="contained"
//               onClick={() => handleView(resume.templateData)}
//             >
//               View
//             </Button>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default SavedResumes;


// import { Box, Typography, Button, useTheme } from "@mui/material";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SavedResumes = () => {
//   const theme = useTheme();
//   const navigate = useNavigate(); // For navigation
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const fetchResumes = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resume/saved`);
//         setResumes(response.data);
//       } catch (error) {
//         console.error("Error fetching resumes:", error);
//       }
//     };
//     fetchResumes();
//   }, []);

//   const handleView = (templateData) => {
//     const newWindow = window.open("", "_blank");
//     newWindow.document.write(templateData);
//     newWindow.document.close();
//   };

//   const handleEdit = (resumeId) => {
//     // Redirect to an editing page with the resume ID as a parameter
//     navigate(`/editResume/${resumeId}`);
//   };

//   const handleDelete = async (resumeId) => {
//     if (window.confirm("Are you sure you want to delete this resume?")) {
//       try {
//         await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/resume/delete/${resumeId}`);
//         // Remove the deleted resume from the state
//         setResumes(resumes.filter((resume) => resume._id !== resumeId));
//         alert("Resume deleted successfully.");
//       } catch (error) {
//         console.error("Error deleting resume:", error);
//         alert("Failed to delete resume.");
//       }
//     }
//   };

//   return (
//     <Box
//       p="2rem"
//       sx={{
//         width: "100%",
//         maxWidth: "98%",
//         margin: "0 auto",
//         marginTop: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <Typography variant="h4" mb="1.5rem">
//         Saved Resumes
//       </Typography>
//       <Box display="flex" flexDirection="column" gap="1rem">
//         {resumes.map((resume) => (
//           <Box
//             key={resume._id}
//             p="1rem"
//             border="1px solid"
//             borderColor={theme.palette.divider}
//             borderRadius="8px"
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Typography variant="h6">{resume.resumeName}</Typography>
//             <Box display="flex" gap="0.5rem">
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleView(resume.templateData)}
//               >
//                 View
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 onClick={() => handleEdit(resume._id)}
//               >
//                 Edit
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={() => handleDelete(resume._id)}
//               >
//                 Delete
//               </Button>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default SavedResumes;







import { Box, Typography, Button, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";

const SavedResumes = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
    newWindow.document.write(templateData.html); // Assuming `templateData` has an `html` property
    newWindow.document.close();
  };

  const handleEdit = (resumeId) => {
    navigate(`/editResume/${resumeId}`);
  };

  const handleDelete = async (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/resume/delete/${resumeId}`);
        setResumes((prev) => prev.filter((resume) => resume._id !== resumeId));
        alert("Resume deleted successfully.");
      } catch (error) {
        console.error("Error deleting resume:", error);
        alert("Failed to delete resume.");
      }
    }
  };

  const handleDownload = (resumeId, templateData) => {
    const fileName = `Resume_${resumeId}.html`;
    const blob = new Blob([templateData.html], { type: "text/html" });
    saveAs(blob, fileName);
  };

  return (
    <Box p="2rem" sx={{ maxWidth: "98%", margin: "0 auto", marginTop: "10px" }}>
      <Typography variant="h4" mb="1.5rem">
        Saved Resumes
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        {resumes.map((resume) => (
          <Box
            key={resume._id}
            p="1rem"
            border="1px solid"
            borderColor={theme.palette.divider}
            borderRadius="8px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{resume.resumeName}</Typography>
            <Box display="flex" gap="0.5rem">
              <Button variant="contained" color="primary" onClick={() => handleView(resume.templateData)}>
                View
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => handleEdit(resume._id)}>
                Edit
              </Button>
              <Button variant="contained" color="error" onClick={() => handleDelete(resume._id)}>
                Delete
              </Button>
              <Button variant="contained" color="success" onClick={() => handleDownload(resume._id, resume.templateData)}>
                Download
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SavedResumes;
