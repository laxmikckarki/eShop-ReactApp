import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwobv6K7dNgsWnS67TM85gaiIqI8V1Xok",
    authDomain: "eshop-8a343.firebaseapp.com",
    projectId: "eshop-8a343",
    storageBucket: "eshop-8a343.appspot.com",
    messagingSenderId: "636951339805",
    appId: "1:636951339805:web:5846ac4a938402b2f0f7f4",
    measurementId: "G-SZ4ZZV1CDK"
  };
  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };