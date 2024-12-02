import { createSlice } from "@reduxjs/toolkit";
import Template7 from "../ResumeTemplates/Template7";

// defining the initial states
const initialState = {
  mode: "light",
  template1: false,
  template2: false,
  template3: false,
  template4: false,
  template5: false,
  template6: false,
  template7: false, 
  template8:false,  
  personalInfo: {},
  workExperiences: {},
  education: {},
  keySkills: {},
};

// defining the reducers for the initial state
export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setTemplate1: (state) => {
      state.template1 = !state.template1;
    },
    setTemplate2: (state) => {
      state.template2 = !state.template2;
    },
    setTemplate3: (state) => {
      state.template3 = !state.template3;
    },
    setTemplate4: (state) => {
      state.template4 = !state.template4;
    },
    setTemplate5: (state) => {
      state.template5 = !state.template5;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setWorkExperiences: (state, action) => {
      state.workExperiences = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setKeySkills: (state, action) => {
      state.keySkills = action.payload;
    },
  },
});

export const {
  setMode,
  setTemplate1,
  setTemplate2,
  setTemplate3,
  setTemplate4,
  setTemplate5,
  setPersonalInfo,
  setEducation,
  setKeySkills,
  setWorkExperiences,
} = stateSlice.actions;
export default stateSlice.reducer;
