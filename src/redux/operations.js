import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../api";

export const fetchCars = createAsyncThunk("cars/fetch", async (_, thunkAPI) => {
  try {
    const data = await getAllCars();
    console.log(data);

    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
