import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAnG0aAInI_gxZopwSXQW1QJEw2Dit42FY",
  authDomain: "clone-indrive-app.firebaseapp.com",
  projectId: "clone-indrive-app",
  storageBucket: "clone-indrive-app.firebasestorage.app",
  messagingSenderId: "158817515757",
  appId: "1:158817515757:web:53fa0b15f44f18cf4234e4",
  measurementId: "G-FZK9HPCG7W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
