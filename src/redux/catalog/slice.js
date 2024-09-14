import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const initialState = {
  items: [],
  page: 0,
  hasNextPage: false,
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        const { page, items, total } = action.payload;
        state.isLoading = false;
        state.error = null;
        state.items = [...(page === 1 ? [] : state.items), ...items];
        state.page = page;
        state.hasNextPage = total > state.items.length;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.items = [];
      });
  },
  selectors: {
    selectTrucks: ({ items }) => items,
    selectHasNextPage: ({ hasNextPage }) => hasNextPage,
  },
});

export const { selectTrucks, selectHasNextPage } = catalogSlice.selectors;

export default catalogSlice.reducer;
