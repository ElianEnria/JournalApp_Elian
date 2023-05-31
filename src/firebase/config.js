// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-FWxvZjGaz-Cs0DXrkXjkZawqv22YDg",
  authDomain: "react-cursoselian.firebaseapp.com",
  projectId: "react-cursoselian",
  storageBucket: "react-cursoselian.appspot.com",
  messagingSenderId: "1033583015630",
  appId: "1:1033583015630:web:9c0cebd03778580bd4829f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
