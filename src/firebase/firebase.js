// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8odGSfCIpZOX48p6RLOrRNiJurs0i7wY",
    authDomain: "boraluwewahospital.firebaseapp.com",
    projectId: "boraluwewahospital",
    storageBucket: "boraluwewahospital.appspot.com",
    messagingSenderId: "170353893559",
    appId: "1:170353893559:web:0d4e35dc135c6be9182d32"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

export default db;