import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css'
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./core/Router";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);
