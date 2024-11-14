import { TextField, useMediaQuery } from "@mui/material";
import { Controller } from "react-hook-form";

const SkillsBox = ({ control, index }) => {
  const isMobileScreen = useMediaQuery("(max-width:800px)");

  return (
    <Controller
      name={`Skill[${index}]`}
      control={control}
      rules={{
        required: "required",
        minLength: {
          value: 2,
          message: "should be at least 2 characters",
        },
      }}
      render={({ field, fieldState }) => (
        <TextField
          label="Skill"
          {...field}
          margin="normal"
          sx={{ marginRight: "1rem" }}
          fullWidth={isMobileScreen ? true : false}
          error={!!fieldState.error}
          helperText={fieldState.error?.message || ""}
        />
      )}
    />
  );
};

export default SkillsBox;
