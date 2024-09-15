import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../api/campers.js";
import { hideLoader, showLoader } from "../loader/slice.js";
import { toast } from "react-hot-toast";

export const fetchTrucks = createAsyncThunk(
  "catalog/fetchTrucks",
  async (nextPage = false, thunkAPI) => {
    let {
      catalog: { page },
      filter,
    } = thunkAPI.getState();
    page = nextPage ? page + 1 : 1;

    const filteredObj = Object.entries(filter).reduce((acc, [key, value]) => {
      return !!value ? { ...acc, [key]: value } : acc;
    }, {});

    thunkAPI.dispatch(showLoader());

    try {
      const { items, total } = await fetchCampers(page, 4, filteredObj);
      return { items, total, page };
    } catch (error) {
      toast.error("Failed to load vehicles!");
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(hideLoader());
    }
  },
);
