import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../api";

export const fetchCars = createAsyncThunk(
  "cars/fetch",
  async (page, thunkAPI) => {
    try {
      const data = await getAllCars(page);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMoreCars = createAsyncThunk(
  "cars/getMore",
  async (page, thunkAPI) => {
    try {
      const data = await getAllCars(page);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
