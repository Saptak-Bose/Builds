import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNRZjfyPgFcBpJrpipVqds2yAaANji6bM",
  authDomain: "insta-clone-c700f.firebaseapp.com",
  projectId: "insta-clone-c700f",
  storageBucket: "insta-clone-c700f.appspot.com",
  messagingSenderId: "81466197265",
  appId: "1:81466197265:web:ec261d25de8ce375ac78b0",
  measurementId: "G-B8CMSNEL7R",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
