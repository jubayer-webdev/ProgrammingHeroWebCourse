// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdhqHwdbFwiB6aXTAiNmWWa8mqEQ56EW4",
    authDomain: "auth-moha-milon-858c7.firebaseapp.com",
    projectId: "auth-moha-milon-858c7",
    storageBucket: "auth-moha-milon-858c7.appspot.com",
    messagingSenderId: "129949542929",
    appId: "1:129949542929:web:de30c478a3b5915f4a5fb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

