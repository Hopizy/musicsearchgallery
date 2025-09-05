// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxVWRXRJGBHtlr0Eht_rECgNk5l9oEn44",
  authDomain: "musicplayers-9569c.firebaseapp.com",
  projectId: "musicplayers-9569c",
  storageBucket: "musicplayers-9569c.firebasestorage.app",
  messagingSenderId: "332014072198",
  appId: "1:332014072198:web:7a6bbec7f53c2c79c87c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);