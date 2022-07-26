import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClpXnjVkuW5OcUkE35Bkmxa49w_40DFSo",
  authDomain: "react-bbedf.firebaseapp.com",
  projectId: "react-bbedf",
  storageBucket: "react-bbedf.appspot.com",
  messagingSenderId: "162082462274",
  appId: "1:162082462274:web:78c0edb052da1bde692bdb",
  measurementId: "G-PEF15QY66L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };