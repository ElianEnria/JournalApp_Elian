import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    //especial de FireBase
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, displayName, photoURL, email } = user;
      dispatch(login({ uid, displayName, photoURL, email }));
    });
  }, []);

  return status;
};
