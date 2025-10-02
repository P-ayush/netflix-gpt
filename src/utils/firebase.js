// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV_Vsaoe7CDHwlbeDaIE5ymF8fEnyHVz0",
  authDomain: "netflix-gpt-66ee2.firebaseapp.com",
  projectId: "netflix-gpt-66ee2",
  storageBucket: "netflix-gpt-66ee2.firebasestorage.app",
  messagingSenderId: "3451563849",
  appId: "1:3451563849:web:74afcdab457b46e2687498",
  measurementId: "G-SDYF78X1PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };