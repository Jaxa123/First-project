import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz_JQ2a1BIh_WlrRs67KAPGP2CMkEej48",
  authDomain: "thejaxa-e7405.firebaseapp.com",
  projectId: "thejaxa-e7405",
  storageBucket: "thejaxa-e7405.firebasestorage.app",
  messagingSenderId: "532775358148",
  appId: "1:532775358148:web:540dd110a17cc86b610391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
