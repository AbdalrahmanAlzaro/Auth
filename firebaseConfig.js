import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiL9I5hokjct0j1WiLg5ZB0erVv094aiw",
  authDomain: "cima-kids.firebaseapp.com",
  databaseURL:
    "https://cima-kids-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cima-kids",
  storageBucket: "cima-kids.appspot.com",
  messagingSenderId: "324919675126",
  appId: "1:324919675126:web:af1fb7392f829b2f2104d7",
  measurementId: "G-WZHXGFQLY0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export {
  app,
  auth,
  firestore,
  database,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  set,
};
