import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const initialState = {
  items: [],
  page: 0,
  hasNextPage: false,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrucks.fulfilled, (state, action) => {
      const { page, items, total } = action.payload;
      state.items = [...(page === 1 ? [] : state.items), ...items];
      state.page = page;
      state.hasNextPage = total > state.items.length;
    });
  },
  selectors: {
    selectTrucks: ({ items }) => items,
    selectHasNextPage: ({ hasNextPage }) => hasNextPage,
  },
});

export const { selectTrucks, selectHasNextPage } = catalogSlice.selectors;

export default catalogSlice.reducer;
