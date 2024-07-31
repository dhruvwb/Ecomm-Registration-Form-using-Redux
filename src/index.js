import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// if Token exists, set isLoggedIn to true in the store.
const token = localStorage.getItem("token");
if (token) {
  // if Token exists , set isLoggedIn to true in the store
  store.dispatch({ type: "LOGIN_SUCCESS, accessToken:token, isLoggedIn:true" });
}

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
