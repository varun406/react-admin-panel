import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-panel-5a9fd.firebaseapp.com",
  projectId: "react-admin-panel-5a9fd",
  storageBucket: "react-admin-panel-5a9fd.appspot.com",
  messagingSenderId: "596483054694",
  appId: "1:596483054694:web:f01993046d9aa56e27e1a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
