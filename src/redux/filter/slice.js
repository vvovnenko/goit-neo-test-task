import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  AC: false,
  transmission: "",
  kitchen: false,
  TV: false,
  bathroom: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleVehicleType: (state, action) => {
      if (state.form === action.payload) {
        state.form = "";
      } else {
        state.form = action.payload;
      }
    },
    toggleAC: (state) => {
      state.AC = !state.AC;
    },
    toggleTransmission: (state) => {
      state.transmission = state.transmission ? "" : "automatic";
    },
    toggleKitchen: (state) => {
      state.kitchen = !state.kitchen;
    },
    toggleTV: (state) => {
      state.TV = !state.TV;
    },
    toggleBathroom: (state) => {
      state.bathroom = !state.bathroom;
    },
  },
  selectors: {
    selectLocation: ({ location }) => location,
    selectVehicleType: ({ form }) => form,
    selectAC: ({ AC }) => AC,
    selectTransmission: ({ transmission }) => transmission,
    selectKitchen: ({ kitchen }) => kitchen,
    selectTV: ({ TV }) => TV,
    selectBathroom: ({ bathroom }) => bathroom,
  },
});

export const {
  setLocation,
  toggleVehicleType,
  toggleAC,
  toggleTransmission,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
} = filterSlice.actions;

export const {
  selectLocation,
  selectVehicleType,
  selectAC,
  selectTransmission,
  selectKitchen,
  selectTV,
  selectBathroom,
} = filterSlice.selectors;

export default filterSlice.reducer;
