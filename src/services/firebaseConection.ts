import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyCptuuQxv2ETzc6V3-2X-40sxX0ygehw1w",
  authDomain: "react-links-9367c.firebaseapp.com",
  projectId: "react-links-9367c",
  storageBucket: "react-links-9367c.appspot.com",
  messagingSenderId: "914341858838",
  appId: "1:914341858838:web:c159fe17b9ac2863d1af37"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db};