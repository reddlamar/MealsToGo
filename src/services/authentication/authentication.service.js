import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAlnISSjKb56uT2mwSH7uHHxw8Zcw4Hzfo",
  authDomain: "mealstogo-c8868.firebaseapp.com",
  projectId: "mealstogo-c8868",
  storageBucket: "mealstogo-c8868.appspot.com",
  messagingSenderId: "14923965195",
  appId: "1:14923965195:web:96721a4a6b298e8df7b80e",
};
//"LR@gmail.com", "123456"

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutRequest = () => {
  return auth.signOut();
};

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const authStateChange = (updateAuthState) => {
  return auth.onAuthStateChanged(updateAuthState);
};
