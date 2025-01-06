// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS198BGAAHu6naGkFZ35AqS9zYvZ3bD7I",
  authDomain: "game-reviews-auth.firebaseapp.com",
  projectId: "game-reviews-auth",
  storageBucket: "game-reviews-auth.firebasestorage.app",
  messagingSenderId: "486984434396",
  appId: "1:486984434396:web:f3d661f0683d32e1bd6a19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
