import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyBtXOQaRG7DdWFDkz8OLfuyHlGPRzVgjoc",
    authDomain: "the-f-site.firebaseapp.com",
    projectId: "the-f-site",
    storageBucket: "the-f-site.appspot.com",
    messagingSenderId: "170698741599",
    appId: "1:170698741599:web:01d7a01b7f4d2983d8c8ea",
    measurementId: "G-NC2NMN00PB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
