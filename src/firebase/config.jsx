import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
import { createContext } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDPdXHRYps4iLG3pmqO5epQCs8f4iDgtas",
  authDomain: "olx-clone-d7829.firebaseapp.com",
  projectId: "olx-clone-d7829",
  storageBucket: "olx-clone-d7829.appspot.com",
  messagingSenderId: "625911262867",
  appId: "1:625911262867:web:273e147003e8b17bff6766",
  measurementId: "G-13DRYJ9PW3",
};

export default firebase.initializeApp(firebaseConfig);

export const FirebaseContext = createContext(null);
