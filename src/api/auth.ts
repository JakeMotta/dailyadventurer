import {
  getIdToken,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";

export const googleSignIn = async (): Promise<UserCredential> => {
  let user: UserCredential = await signInWithPopup(auth, googleProvider);

  console.log("googleSignIn: ", user);
  return user;
};

export const getAccessToken = async (): Promise<string | null> => {
  const user = auth?.currentUser;
  if (!user) return null;

  return await getIdToken(user);
};
