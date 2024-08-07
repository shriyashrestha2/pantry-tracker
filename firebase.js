// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQG_OA-F8ioLpyVZsGkP5fkKs4Z3ykOo",
  authDomain: "pantry-tracker-8fd90.firebaseapp.com",
  projectId: "pantry-tracker-8fd90",
  storageBucket: "pantry-tracker-8fd90.appspot.com",
  messagingSenderId: "232154485711",
  appId: "1:232154485711:web:53509bbd3c3fe3fad038ba",
  measurementId: "G-GTDQS29YW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}