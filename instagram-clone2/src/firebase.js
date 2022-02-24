import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEGnZ9_xJvymV4LIUS0TVSX-Fm_rsb-Ig",
  authDomain: "instagram-clone2-b8b7b.firebaseapp.com",
  projectId: "instagram-clone2-b8b7b",
  storageBucket: "instagram-clone2-b8b7b.appspot.com",
  messagingSenderId: "126998361609",
  appId: "1:126998361609:web:8780bc8a829bdb944fead8", 
  measurementId: "G-YG969C760D"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }