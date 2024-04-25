// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKf3I4CGoaKEZSiPaUksp9tL8orUNVTE0",
  authDomain: "coffee-store-2a449.firebaseapp.com",
  projectId: "coffee-store-2a449",
  storageBucket: "coffee-store-2a449.appspot.com",
  messagingSenderId: "391258192530",
  appId: "1:391258192530:web:db936f151fe725a090c44b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;