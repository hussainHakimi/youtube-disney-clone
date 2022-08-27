import firebase from "./firebase";
// import firebase from 'firebase/compat/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBd8j7Xse5YM5ZgQ265xfV22oVQOBNV6zI",
  authDomain: "disneyplus-clone-8bd9e.firebaseapp.com",
  projectId: "disneyplus-clone-8bd9e",
  storageBucket: "disneyplus-clone-8bd9e.appspot.com",
  messagingSenderId: "646209431748",
  appId: "1:646209431748:web:b75425db7e7e6dbdad4191",
  measurementId: "G-1NXY60JCRN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, firebaseApp };
export default db;
