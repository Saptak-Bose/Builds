import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFGttovP6HY11w-BUygtituB61Ts8ERU4",
  authDomain: "facebook-65aaf.firebaseapp.com",
  projectId: "facebook-65aaf",
  storageBucket: "facebook-65aaf.appspot.com",
  messagingSenderId: "481783567413",
  appId: "1:481783567413:web:be57e4f36b3fb45d274d7c",
  measurementId: "G-0CVVG0K977",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)