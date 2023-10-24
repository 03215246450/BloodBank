// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw5GZ1UHDf6L0VTyOw1SvvQAsD-R1Khr4",
  authDomain: "blood-bank-d2fcd.firebaseapp.com",
  databaseURL: "https://blood-bank-d2fcd-default-rtdb.firebaseio.com",
  projectId: "blood-bank-d2fcd",
  storageBucket: "blood-bank-d2fcd.appspot.com",
  messagingSenderId: "262841745109",
  appId: "1:262841745109:web:1351412b2f0bb69d126c5c",
  measurementId: "G-JL89W8R2CT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);