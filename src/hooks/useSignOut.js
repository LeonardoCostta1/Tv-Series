import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
import { setLoginFalse } from "../redux/reducers/loginSlice";
import { useDispatch } from "react-redux";

export function useSignOut() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setLoginFalse());
      })
      .catch((error) => {
        setError(error);
      });
  };

  return [handleSignOut, error];
}
