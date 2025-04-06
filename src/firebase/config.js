import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBf6LlL3WVwIhw8GE2xFgpmc174QTEb9Y",
  authDomain: "j079-276bf.firebaseapp.com",
  projectId: "j079-276bf",
  storageBucket: "j079-276bf.firebasestorage.app",
  messagingSenderId: "195770959613",
  appId: "1:195770959613:web:d507bb8ff45b1eed0c6094",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };