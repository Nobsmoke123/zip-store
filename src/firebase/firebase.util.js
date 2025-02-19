import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCKqB4JlmLLrM8jImoVvQOODAMQ8jVOif8",
  authDomain: "shalaapi-55bef.firebaseapp.com",
  projectId: "shalaapi-55bef",
  storageBucket: "shalaapi-55bef.firebasestorage.app",
  messagingSenderId: "957170598036",
  appId: "1:957170598036:web:9187a0938aa870f96ab481",
  measurementId: "G-J8HMN859BS",
};

const app = initializeApp(config);

export const auth = getAuth(app);

export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
