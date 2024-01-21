import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const carsInitialState = {
  rentalCars: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rentalCars = action.payload;
        state.error = null;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
