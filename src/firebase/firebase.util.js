import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(config);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider).catch((error) => console.log(error));

export default app;
