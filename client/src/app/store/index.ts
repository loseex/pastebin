import { combineReducers, configureStore } from "@reduxjs/toolkit/react";

import { PasteAPI } from "@/entities/paste/paste.api";

const rootReducer = combineReducers({
  [PasteAPI.reducerPath]: PasteAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PasteAPI.middleware),
});

export type TypedRootState = ReturnType<typeof store.getState>;
