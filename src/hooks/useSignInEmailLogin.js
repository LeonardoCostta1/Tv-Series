import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { app } from "../firebase";
import { setLoginTrue } from "../redux/reducers/loginSlice";

export function useSignInEmailLogin() {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailLogin = (event) => {
    dispatch({ type: "LOADING_SET_LOAD", payload: true });
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setLoginTrue());
        dispatch({ type: "LOADING_SET_LOAD", payload: false });
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        dispatch({ type: "LOADING_SET_LOAD", payload: false });
      });
  };

  

  return [handleEmailLogin, handleEmailChange, handlePasswordChange, error];
}
