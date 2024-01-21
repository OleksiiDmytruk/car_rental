import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./carsSlice";
import { filterReducer } from "./filterSlice";
import { favoritesReducer } from "./favoritesSlice";

const authPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: persistReducer(authPersistConfig, favoritesReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.VITE_NODE_ENV === "development",
});

export const persistor = persistStore(store);
