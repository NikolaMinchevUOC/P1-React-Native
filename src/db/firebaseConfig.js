// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8vD6bstUhAdSAGc5g7PBgin4pDJ_IQ64",
  authDomain: "p5-reactivados.firebaseapp.com",
  projectId: "p5-reactivados",
  storageBucket: "p5-reactivados.appspot.com",
  messagingSenderId: "294041808384",
  appId: "1:294041808384:web:4a41df58c29d4cced972e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
