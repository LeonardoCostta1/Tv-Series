import { combineReducers, configureStore } from "@reduxjs/toolkit";
import codeReducer from "./reducers/id";
import modalReducer from "./reducers/modalSlice";
import { moviesApi } from "./reducers/movies";
import loginSlice from "./reducers/loginSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import LoadingReducer from "./reducers/loding";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ['load'] // navigation will not be persisted
};

const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  code: codeReducer,
  modalSlice: modalReducer,
  login: loginSlice,
  load:LoadingReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(moviesApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(moviesApi.middleware)
});

export const persistor = persistStore(store);
