// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Corrected import for Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPcdvVU_HzwQnMDYu_NT45Y3TkBrXzw6Q",
  authDomain: "concrete-crow-411008.firebaseapp.com",
  projectId: "concrete-crow-411008",
  storageBucket: "concrete-crow-411008.appspot.com",
  messagingSenderId: "786261170364",
  appId: "1:786261170364:web:9f1b225da4847e95aa58b9",
  measurementId: "G-FPC7RTQTBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Corrected initialization for Firestore

export { db };
