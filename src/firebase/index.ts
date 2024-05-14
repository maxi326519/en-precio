import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWbsB2RM63aI3ikBXnu6FTyDTdGKO9XtU",
  authDomain: "enprecio-b64b8.firebaseapp.com",
  projectId: "enprecio-b64b8",
  storageBucket: "enprecio-b64b8.appspot.com",
  messagingSenderId: "657555094223",
  appId: "1:657555094223:web:737145950e37911f4355ba",
  measurementId: "G-4VKZ649PCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const functions = getFunctions(app);

// Emulator
if (import.meta.env.VITE_EMULATOR === "true") {
  console.log("Emulator running");
  connectAuthEmulator(auth, "http://localhost:9090");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5000);
}

export { app, auth, db, storage };
