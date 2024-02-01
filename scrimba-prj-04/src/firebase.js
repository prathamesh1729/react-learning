import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkYToMcmzFo8qqrP2ndYuvOPCp1KGotpI",
  authDomain: "react-notes-cd68b.firebaseapp.com",
  projectId: "react-notes-cd68b",
  storageBucket: "react-notes-cd68b.appspot.com",
  messagingSenderId: "411996136721",
  appId: "1:411996136721:web:bf2c5dd609aa30e14758b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
