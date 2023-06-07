import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr2CeBxcXz4Eq_ZC_kSOusXaPavLABCBs",
  authDomain: "the-cleaning-bee.firebaseapp.com",
  projectId: "the-cleaning-bee",
  storageBucket: "the-cleaning-bee.appspot.com",
  messagingSenderId: "925591237521",
  appId: "1:925591237521:web:6e4f979db6c6c491222030",
  measurementId: "G-NZ72KEDGF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore();
export { auth, db };
