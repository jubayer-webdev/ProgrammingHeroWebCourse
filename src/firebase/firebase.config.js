// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeUjB7HGqxbVQCyA8evbJS14-vsTnuFro",
    authDomain: "user-email-password-auth-37b9f.firebaseapp.com",
    projectId: "user-email-password-auth-37b9f",
    storageBucket: "user-email-password-auth-37b9f.appspot.com",
    messagingSenderId: "464983015805",
    appId: "1:464983015805:web:7d6654e339fdfaadc34c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;