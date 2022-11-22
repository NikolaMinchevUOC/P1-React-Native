// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4UyMqZSziBV8bHlWnNyvrBmlbhOa6Q0",
  authDomain: "reactivados-755f2.firebaseapp.com",
  projectId: "reactivados-755f2",
  storageBucket: "reactivados-755f2.appspot.com",
  messagingSenderId: "341175892720",
  appId: "1:341175892720:web:bc0b65dbfa56317e1e6035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
