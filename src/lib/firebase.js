import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pyrus-react.firebaseapp.com",
  projectId: "pyrus-react",
  storageBucket: "pyrus-react.appspot.com",
  messagingSenderId: "516442818141",
  appId: "1:516442818141:web:b29abaad3fe41b75c2afb4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
