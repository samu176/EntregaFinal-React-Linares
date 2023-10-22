// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqgfzDtyZgNKQmyxbGupKqgFbNHU8OLe0",
  authDomain: "tiendapotter-31d38.firebaseapp.com",
  projectId: "tiendapotter-31d38",
  storageBucket: "tiendapotter-31d38.appspot.com",
  messagingSenderId: "125195741932",
  appId: "1:125195741932:web:c8042c5894fe986de393c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);