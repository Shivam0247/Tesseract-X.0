// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaMYY-iPkg1EtNleO2QPG2e_LOYwikJo0",
  authDomain: "tesseract-x-0.firebaseapp.com",
  projectId: "tesseract-x-0",
  storageBucket: "tesseract-x-0.appspot.com",
  messagingSenderId: "904848405177",
  appId: "1:904848405177:web:95a41a5f367b9ac7fda168",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
