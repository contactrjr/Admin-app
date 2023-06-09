// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration  process.env.REAT_APP_FIREBASE_KEY
const firebaseConfig = {
  //apiKey: "AIzaSyDGNC-C7sTpgiTCKLM-0Ghy8SYPCzzk8RI",
  apiKey: import.meta.env.VITE_REAT_APP_FIREBASE_KEY,
  authDomain: "myfirebase-a9b85.firebaseapp.com",
  projectId: "myfirebase-a9b85",
  storageBucket: "myfirebase-a9b85.appspot.com",
  messagingSenderId: "560026434416",
  appId: "1:560026434416:web:5991f68aeb4540a06eadb5"
};


// Initialize Firebase       
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
export const dbStorage = getStorage(app);
