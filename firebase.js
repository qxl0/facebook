// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuGQOQTkaxxlJfERosGMa1BmLdyELj44Y",
  authDomain: "facebook-d1502.firebaseapp.com",
  projectId: "facebook-d1502",
  storageBucket: "facebook-d1502.appspot.com",
  messagingSenderId: "1072189419045",
  appId: "1:1072189419045:web:aa39e674763932c5b659cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export { app, db };
