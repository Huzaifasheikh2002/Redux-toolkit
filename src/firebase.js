// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4LuOA3515OUOZE3hcR-CKL2bxl36HaS4",
  authDomain: "reduxxtoolkit.firebaseapp.com",
  projectId: "reduxxtoolkit",
  storageBucket: "reduxxtoolkit.appspot.com",
  messagingSenderId: "812832343004",
  appId: "1:812832343004:web:f05e73a0e15a1d39360519",
  measurementId: "G-YGZDHXSP43"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// db
const db = getFirestore(app);
// auth
const auth = getAuth(app); 
// 


export {db,auth};