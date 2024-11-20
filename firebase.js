// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE4sEEnPvJWrI_34NH8P6VIwC01loyUVA",
  authDomain: "eco-travel-blog.firebaseapp.com",
  projectId: "eco-travel-blog",
  storageBucket: "eco-travel-blog.firebasestorage.app",
  messagingSenderId: "151567552406",
  appId: "1:151567552406:web:89290b02d052efc3f997b7",
  measurementId: "G-DRP93QGQWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
