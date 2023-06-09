import {
  loginWhitEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreateUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({ email, password, displayName });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, photoURL, displayName, email }));
  };
};

export const startLoginWhitEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWhitEmailPassword({
      email,
      password,
    });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogOut = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNotesLogout())
    dispatch(logout({}));
  };
};
