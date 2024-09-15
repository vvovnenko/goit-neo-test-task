import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
  selectors: {
    selectIsLoading: ({ isLoading }) => isLoading,
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;

export const { selectIsLoading } = loaderSlice.selectors;

export default loaderSlice.reducer;
