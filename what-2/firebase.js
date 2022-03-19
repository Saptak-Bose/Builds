import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3xQcaSJX8pNI-guvr_x9Zh34R7eTPPgg",
  authDomain: "what-2.firebaseapp.com",
  projectId: "what-2",
  storageBucket: "what-2.appspot.com",
  messagingSenderId: "713674407603",
  appId: "1:713674407603:web:d18a07b03259101339bac6",
  measurementId: "G-7B46HYMSD9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
