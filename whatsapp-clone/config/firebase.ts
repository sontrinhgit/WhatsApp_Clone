// Import the functions you need from the SDKs you need
import { getApps, getApp,  initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBTU76N7Vh9WSiISaG-5CMFkVC849UQsTI",
  authDomain: "whatsapp-clone-b1aa2.firebaseapp.com",
  projectId: "whatsapp-clone-b1aa2",
  storageBucket: "whatsapp-clone-b1aa2.appspot.com",
  messagingSenderId: "259336227753",
  appId: "1:259336227753:web:bab6301d93f602411c12b8"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {db, auth, provider}

