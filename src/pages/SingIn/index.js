import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import "./style.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSignInEmailLogin } from "../../hooks/useSignInEmailLogin";
function SingIn() {
  const [handleEmailLogin, handleEmailChange, handlePasswordChange] =
    useSignInEmailLogin();
  const authenticated = useSelector((state) => state.login.value);

  if (authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="signin_wrapper">
        <div className="signin_container">
          <Logo textLogo="streamreel" />
          <div className="text_signin">sign in to streamreel</div>
          <form onSubmit={handleEmailLogin} method="POST">
            <label>email address</label>
            <input
              type="text"
              name="email"
              onChange={handleEmailChange}
            ></input>
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
            ></input>
            <Button title="confirm" />
          </form>
        </div>
      </div>
    );
  }
}

export default SingIn;
