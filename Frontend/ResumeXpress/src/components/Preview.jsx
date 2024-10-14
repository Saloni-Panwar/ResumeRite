import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Template1 from "../ResumeTemplates/Template1";
import Template2 from "../ResumeTemplates/Template2";
import Template3 from "../ResumeTemplates/Template3";
import Template4 from "../ResumeTemplates/Template4";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import done from "../assets/done.gif";
import { useState } from "react";

const Preview = ({ setOnFormSubmit }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const template1 = useSelector((state) => state.template1);
  const template2 = useSelector((state) => state.template2);
  const template3 = useSelector((state) => state.template3);
  const template4 = useSelector((state) => state.template4);
  const [isDownloading, setDownloading] = useState(false);

  const { handleSubmit, control } = useForm();

  //this function is responsible for converting the template to pdf

  const convertToPDF = (htmlContent, resumeName) => {
    html2canvas(htmlContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${resumeName}.pdf`);
      setTimeout(() => {
        setDownloading(false);
      }, 2000);
    });
  };

  const onSubmit = (data) => {
    const resumeName = data.resumeName;
    const htmlContent = document.getElementById("pdf-content");
    setDownloading(true);
    convertToPDF(htmlContent, resumeName);
  };

  //this function will return the right template that user has selected
  const getTemplate = () => {
    switch (true) {
      case template1:
        return <Template1 />;
      case template2:
        return <Template2 />;
      case template3:
        return <Template3 />;
      case template4:
        return <Template4 />;
      default:
        return "You have not selected any template !";
    }
  };

  const handleBack = () => {
    setOnFormSubmit(false);
  };

  const Model = () => {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="10"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          p="1rem"
          borderRadius="8px"
          backgroundColor={theme.palette.background.alt}
        >
          <Box
            width="100%"
            maxWidth="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={done} width="100%" height="auto" alt="img" />
          </Box>
          <Typography textAlign="center" variant="h5" color="greenyellow">
            Saved Successfully!!
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      position="relative"
      p="5px"
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      {isDownloading ? <Model /> : ""}
      <Box
        display="flex"
        flexDirection={isMobileScreen ? "column-reverse" : "row"}
        justifyContent="space-between"
        gap={isMobileScreen ? "1.5rem" : "2rem"}
      >
        <Box
          width="100%"
          minWidth={isMobileScreen ? "280px" : "600px"}
          overflow="auto"
        >
          <Box width="100%" minWidth="600px">
            {getTemplate()}
          </Box>
        </Box>

        <Box
          width="100%"
          maxWidth="280px"
          maxHeight="210px"
          p="1rem"
          backgroundColor={theme.palette.background.alt}
          borderRadius="5px"
        >
          <Typography color={main}>Give a name and save </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              mt="1rem"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              gap="1rem"
            >
              <Controller
                name="resumeName"
                control={control}
                rules={{
                  required: "Required",
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    label="Name"
                    {...field}
                    margin="normal"
                    fullWidth={isMobileScreen ? true : false}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Box display="flex" flexWrap="wrap" gap="0.5rem">
                <Button size="large" variant="outlined" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" size="large" type="submit">
                  Save
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Preview;
