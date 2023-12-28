import { PasteAPI } from "@/entities/paste/model/paste.model";
import { combineReducers, configureStore } from "@reduxjs/toolkit/react";

const rootReducer = combineReducers({
  [PasteAPI.reducerPath]: PasteAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PasteAPI.middleware),
});

export type TypedRootState = ReturnType<typeof store.getState>;
