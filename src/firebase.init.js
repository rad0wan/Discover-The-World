// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBizFP_dJVsC-ufoe06oJROsD2pzUaRbO4",
    authDomain: "discover-the-world-dae31.firebaseapp.com",
    projectId: "discover-the-world-dae31",
    storageBucket: "discover-the-world-dae31.appspot.com",
    messagingSenderId: "917868835832",
    appId: "1:917868835832:web:b2c29598fe18785e8ddc0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)