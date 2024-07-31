import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import userReducer from "./reducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"], //only persist the user reducer
};

const peristedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: peristedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

const persistor = persistStore(store);

store.getToken = () => localStorage.getItem("token");

store.setToken = (token) => localStorage.setItem("token", token);

export { store, persistor };
