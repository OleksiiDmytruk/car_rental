import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, getMoreCars } from "./operations";

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
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(getMoreCars.pending, handlePending)
      .addCase(getMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rentalCars = [...state.rentalCars, ...action.payload];
        state.error = null;
      })
      .addCase(getMoreCars.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
