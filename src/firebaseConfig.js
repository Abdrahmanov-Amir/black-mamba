// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvHN9N14wClhhGDrvVVpVRXz3tZTT8pI",
  authDomain: "basketball-shop--black-mamba.firebaseapp.com",
  projectId: "basketball-shop--black-mamba",
  storageBucket: "basketball-shop--black-mamba.firebasestorage.app",
  messagingSenderId: "569298170364",
  appId: "1:569298170364:web:8ccd3b340603265fd18279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);