import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../api/campers.js";

export const fetchTrucks = createAsyncThunk(
  "catalog/fetchTrucks",
  async (nextPage = false, thunkAPI) => {
    let {
      catalog: { page },
    } = thunkAPI.getState();
    page = nextPage ? page + 1 : 1;

    try {
      const { items, total } = await fetchCampers(page, 4);
      return { items, total, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
