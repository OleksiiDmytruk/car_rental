import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    changeFavorite: {
      reducer(state, action) {
        const idx = state.favorites.findIndex(
          (item) => item.id === action.payload.id
        );
        if (!idx) {
          state.favorites.push(action.payload);
        } else {
          state.favorites.splice(idx, 1);
        }
      },
    },
  },
});

export const { changeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
