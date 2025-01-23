// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk81jWObON6oPh49g70gaaa3FVoAbDnUs",
  authDomain: "react-journal-7dc74.firebaseapp.com",
  projectId: "react-journal-7dc74",
  storageBucket: "react-journal-7dc74.firebasestorage.app",
  messagingSenderId: "200460077721",
  appId: "1:200460077721:web:c3f8f9efd968f4d8084608",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
