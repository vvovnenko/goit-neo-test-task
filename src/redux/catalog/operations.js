import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchTrucks = createAsyncThunk(
  "catalog/fetchTrucks",
  async (nextPage = false, thunkAPI) => {
    let {
      catalog: { page },
    } = thunkAPI.getState();
    page = nextPage ? page + 1 : 1;

    const params = new URLSearchParams({
      page,
      limit: 4,
    });

    try {
      const {
        data: { items, total },
      } = await axios.get(`${BASE_URL}/campers?${params}`);
      return { items, total, page };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
