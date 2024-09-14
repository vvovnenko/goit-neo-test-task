import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalog/slice.js";

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
  },
});
