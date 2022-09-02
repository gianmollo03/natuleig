// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgXjyxsXW7IfP_M3wByFZWCKVBoXiCh3c",
  authDomain: "natuleig.firebaseapp.com",
  projectId: "natuleig",
  storageBucket: "natuleig.appspot.com",
  messagingSenderId: "486287606974",
  appId: "1:486287606974:web:5755eff6a25831d303caef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

console.log(database);

export default database;
