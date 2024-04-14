import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmCe_JUOBfw0M7grqIjoblmDH78CFOuPU",
  authDomain: "projetoreact-e4822.firebaseapp.com",
  projectId: "projetoreact-e4822",
  storageBucket: "projetoreact-e4822.appspot.com",
  messagingSenderId: "86276816583",
  appId: "1:86276816583:web:da10e148a3af330e1448e2",
  measurementId: "G-ZSMEKGH7BS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);