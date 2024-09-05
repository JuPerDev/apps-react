// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCWWInXNO90nzSsmVcXWhGcDK0rEcwSos",
  authDomain: "todolist-3c41c.firebaseapp.com",
  projectId: "todolist-3c41c",
  storageBucket: "todolist-3c41c.appspot.com",
  messagingSenderId: "716275318916",
  appId: "1:716275318916:web:acd1d62cad23cc4c7b82d1",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
