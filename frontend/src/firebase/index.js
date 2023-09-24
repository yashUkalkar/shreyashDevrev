import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import compatApp from "firebase/compat/app";

import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

import firebaseConfig from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
compatApp.initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);

// FirebaseUI instance
const getFirebaseUI = () => {
  const ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(compatApp.auth());
  return ui;
};

export { app, auth, getFirebaseUI };
