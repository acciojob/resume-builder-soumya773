import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: { fname: "", lname: "", phone: "", address: "", url: "" },
  education: [],
  skills: [],
  projects: [],
  social: []
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updateProfile: (state, action) => { state.profile = { ...state.profile, ...action.payload }; },
    addEducation: (state, action) => { state.education.push(action.payload); },
    deleteEducation: (state, action) => { state.education.splice(action.payload, 1); },
    addSkill: (state, action) => { state.skills.push(action.payload); },
    deleteSkill: (state, action) => { state.skills.splice(action.payload, 1); },
    addProject: (state, action) => { state.projects.push(action.payload); },
    deleteProject: (state, action) => { state.projects.splice(action.payload, 1); },
    addSocial: (state, action) => { state.social.push(action.payload); }
  }
});

export const {
  updateProfile, addEducation, deleteEducation,
  addSkill, deleteSkill,
  addProject, deleteProject,
  addSocial
} = resumeSlice.actions;

export default resumeSlice.reducer;
