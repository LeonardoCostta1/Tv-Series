import React from "react";
import SingIn from "../pages/SingIn";
import Protected from "../core/Protected";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import App from "../App";
import Loading from "../components/Loading";

function Router() {
  const authenticated = useSelector((state) => state.login.value);
  const loaded = useSelector((state) => state.load);

  if(loaded){
    return <Loading/>
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected isSignedIn={authenticated}>
            <App />
          </Protected>
        }
      />
      <Route path="/signin" element={<SingIn />} />

      <Route
        path="/oba"
        element={
          <Protected isSignedIn={authenticated}>
            <Loading/>
          </Protected>
        }
      />
    </Routes>
  );
}

export default Router;
