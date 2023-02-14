import { configureStore } from "@reduxjs/toolkit";
import codeReducer from "../services/id";
import modalReducer from "../services/modalSlice";
import { moviesApi } from "../services/movies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    code: codeReducer,
    modalSlice:modalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
});
