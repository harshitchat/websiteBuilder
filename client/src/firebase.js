// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webbuild-53291.firebaseapp.com",
  projectId: "webbuild-53291",
  storageBucket: "webbuild-53291.firebasestorage.app",
  messagingSenderId: "358314162128",
  appId: "1:358314162128:web:e16d986feb61bc30e1ebd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider() 

export {auth,provider}
