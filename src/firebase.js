// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmCe_JUOBfw0M7grqIjoblmDH78CFOuPU",
  authDomain: "projetoreact-e4822.firebaseapp.com",
  projectId: "projetoreact-e4822",
  storageBucket: "projetoreact-e4822.appspot.com",
  messagingSenderId: "86276816583",
  appId: "1:86276816583:web:da10e148a3af330e1448e2",
  measurementId: "G-ZSMEKGH7BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);