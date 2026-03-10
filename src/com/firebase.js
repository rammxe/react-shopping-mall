// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMXSbdUkI9g860407s0afyjY9HpKBgsx4",
  authDomain: "shopping-mall-ee55a.firebaseapp.com",
  projectId: "shopping-mall-ee55a",
  storageBucket: "shopping-mall-ee55a.firebasestorage.app",
  messagingSenderId: "793382470038",
  appId: "1:793382470038:web:ab67bbaec7d8350a659db7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
