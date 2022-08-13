// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANHkbPcniCDibabbEwp7Jcxq5vdPvsGBY",
    authDomain: "codefury-b92fc.firebaseapp.com",
    projectId: "codefury-b92fc",
    storageBucket: "codefury-b92fc.appspot.com",
    messagingSenderId: "1025169560528",
    appId: "1:1025169560528:web:791ce7435a1371f73c1fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();