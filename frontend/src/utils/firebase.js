// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFz6HuilGouuLsckvbTz9lnWQzu6SAlsQ",
  authDomain: "netflix-gpt-fcd6e.firebaseapp.com",
  projectId: "netflix-gpt-fcd6e",
  storageBucket: "netflix-gpt-fcd6e.firebasestorage.app",
  messagingSenderId: "460681303262",
  appId: "1:460681303262:web:1ddd7f4299232f1ce89e4f",
  measurementId: "G-SP5CS3660K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();