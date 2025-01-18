// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQwgpQxcHAs7ON2f_T3xJ59c7vAsDmrVo",
  authDomain: "netflixgpt-d26cf.firebaseapp.com",
  projectId: "netflixgpt-d26cf",
  storageBucket: "netflixgpt-d26cf.firebasestorage.app",
  messagingSenderId: "824438666822",
  appId: "1:824438666822:web:0bc9081083d17473cb3c47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();