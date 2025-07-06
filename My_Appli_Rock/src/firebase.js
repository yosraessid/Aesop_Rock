// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-bDhuIlurTgIphlbgEIYBomUI3O8P1-g",
  authDomain: "aesoprock-9a9cb.firebaseapp.com",
  projectId: "aesoprock-9a9cb",
  storageBucket: "aesoprock-9a9cb.appspot.com",
  messagingSenderId: "963907754466",
  appId: "1:963907754466:web:18a18d0f7012f01dfb81bb",
  measurementId: "G-WKXD47525T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);