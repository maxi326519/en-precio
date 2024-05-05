import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { AppDispatch, RootState } from "../../../interfaces/ReduxState";
import { Login, Singup } from "../../../interfaces/Sesion";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { auth, db } from "../../../firebase";
import { User } from "../../../interfaces/User";
import {
  signOut,
  updateEmail,
  updatePassword,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const SIGN_IN = "SIGN_IN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const UPDATE_EMAIL = "UPDATE_EMAIL";

const userColl = collection(db, "Users");

export function signUp(user: Singup) {
  return async (dispatch: AppDispatch) => {
    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password!
      );

      // Create data to save
      const userId = userCredential.user.uid;
      const newUser: User = {
        name: user.name,
        surName: user.surName,
        photo: "",
        email: user.email,
      };

      // Save data
      await setDoc(doc(userColl, userId), newUser);

      // Add id
      newUser.id = userId;

      dispatch({
        type: SIGN_IN,
        payload: newUser,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function logIn(userData: Login) {
  return async (dispatch: AppDispatch) => {
    try {
      // User log
      await signInWithEmailAndPassword(auth, userData.email, userData.password);

      // Firebase path
      const colUser = collection(db, "Users");
      const snapshot = await getDoc(doc(colUser, auth.currentUser?.uid));

      // Get user data
      const currentUser = {
        ...snapshot.data(),
        id: snapshot.id,
      };

      dispatch({
        type: LOGIN,
        payload: currentUser,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function logOut(): ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
> {
  return async (dispatch: AppDispatch) => {
    try {
      await signOut(auth);
      dispatch({
        type: LOGOUT,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function getUserData(): ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
> {
  return async (dispatch: AppDispatch) => {
    try {
      const colUser = collection(db, "Users");
      const snapshot = await getDoc(doc(colUser, auth.currentUser?.uid));

      const currentUser = {
        ...snapshot.data(),
        id: snapshot.id,
      };

      dispatch({
        type: LOGIN,
        payload: currentUser,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function changePassword(
  newPassword: string,
  curretnPassword: string,
  user: User
): ThunkAction<Promise<void>, RootState, null, AnyAction> {
  return async (dispatch: AppDispatch) => {
    try {
      // Check auth user
      if (!auth.currentUser) throw new Error("User not logued");

      // Log user and update your password
      await signInWithEmailAndPassword(auth, user.email, curretnPassword);
      await updatePassword(auth.currentUser, newPassword);

      dispatch({
        type: CHANGE_PASSWORD,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function changeEmail(
  newEmail: string,
  curretnPassword: string,
  user: User
): ThunkAction<Promise<void>, RootState, null, AnyAction> {
  return async (dispatch: AppDispatch) => {
    try {
      // Check auth user
      if (!auth.currentUser) throw new Error("User not logued");

      // Log user and update your email
      await signInWithEmailAndPassword(auth, user.email, curretnPassword);
      await updateEmail(auth.currentUser, newEmail);

      // Update user data
      const userCol = collection(db, "Users");
      const userDoc = doc(userCol, auth.currentUser.uid);
      updateDoc(userDoc, { email: newEmail });

      dispatch({
        type: UPDATE_EMAIL,
        payload: newEmail,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}
