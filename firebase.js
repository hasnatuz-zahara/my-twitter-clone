// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "my-twitter-clone-ebe81.firebaseapp.com",
    projectId: "my-twitter-clone-ebe81",
    storageBucket: "my-twitter-clone-ebe81.appspot.com",
    messagingSenderId: "665815176292",
    appId: "1:665815176292:web:19bd95972aa6254b687b71"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();

export { app, db, storage };