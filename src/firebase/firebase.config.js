// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMzhhgQtG5XheJWi8qkasbTXUgI6oikbk",
  authDomain: "the-news-dragon-95ef1.firebaseapp.com",
  projectId: "the-news-dragon-95ef1",
  storageBucket: "the-news-dragon-95ef1.appspot.com",
  messagingSenderId: "963442056209",
  appId: "1:963442056209:web:1f40fb104586c1f55665b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;