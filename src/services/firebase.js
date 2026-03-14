import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtBs8Uzvu9ZNQ9AYF-A_IvufIntrJvorA",
  authDomain: "myfirsttest-95db8.firebaseapp.com",
  databaseURL: "https://myfirsttest-95db8-default-rtdb.firebaseio.com",
  projectId: "myfirsttest-95db8",
  storageBucket: "myfirsttest-95db8.firebasestorage.app",
  messagingSenderId: "408604795823",
  appId: "1:408604795823:web:94e20be379e8f73e23055a",
  measurementId: "G-KXQHMB3S73"
};

const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);