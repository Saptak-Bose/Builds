import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxh1dpVieyT3ylDxHYE6B_4vbQe3_j1pU",
  authDomain: "twitter-clone-9e749.firebaseapp.com",
  projectId: "twitter-clone-9e749",
  storageBucket: "twitter-clone-9e749.appspot.com",
  messagingSenderId: "630243801110",
  appId: "1:630243801110:web:0d648ad00767a4f17e9d37",
  measurementId: "G-FHE73KF25D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
