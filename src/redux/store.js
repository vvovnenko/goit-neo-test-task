import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./catalog/slice.js";
import favoriteSlice from "./favorite/slice.js";
import filterSlice from "./filter/slice.js";
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

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    favorite: persistReducer(
      {
        key: "favorite",
        storage,
        whitelist: ["truckIds"],
      },
      favoriteSlice,
    ),
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
