import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfcaF7RdXBVu7QZ7lZhn3-gakF7dKmaeg",
  authDomain: "clonesap.firebaseapp.com",
  projectId: "clonesap",
  storageBucket: "clonesap.appspot.com",
  messagingSenderId: "171748535304",
  appId: "1:171748535304:web:a1d608aa9ee4ca6904b5bd",
  measurementId: "G-SKTX93SGRX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };