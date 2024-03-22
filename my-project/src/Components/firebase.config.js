// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyJux-q4o9E3IXGRX66hTfBjubekQWnUQ",
  authDomain: "chatapp-30d73.firebaseapp.com",
  projectId: "chatapp-30d73",
  storageBucket: "chatapp-30d73.appspot.com",
  messagingSenderId: "889425898008",
  appId: "1:889425898008:web:5ad005a4881107c9eb716d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)