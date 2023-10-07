// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmbHRR2giZifUF8e0wBORltId-_6rZbOY",
  authDomain: "social-event-weddings.firebaseapp.com",
  projectId: "social-event-weddings",
  storageBucket: "social-event-weddings.appspot.com",
  messagingSenderId: "815223128527",
  appId: "1:815223128527:web:037663310ff1607ec0d2ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;