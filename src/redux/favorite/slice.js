import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  truckIds: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const truckId = action.payload;
      const index = state.truckIds.indexOf(truckId);
      if (index !== -1) {
        state.truckIds = state.truckIds.filter((id) => id !== truckId);
      } else {
        state.truckIds = [...state.truckIds, truckId];
      }
    },
  },
  selectors: {
    selectFavoriteList: (state) => state.truckIds,
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export const { selectFavoriteList } = favoriteSlice.selectors;

export default favoriteSlice.reducer;
