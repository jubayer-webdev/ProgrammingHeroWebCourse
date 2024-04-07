import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    //! https://firebase.google.com/docs/auth/web/github-auth?hl=en&authuser=0
    const githubProvider = new GithubAuthProvider();

    //!Should set up sign-in-method google in firebase to avoid Firebase:Error(auth/configuration-not-found
    const handleGoogleSignIn = () => {
        //!https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log("user info...", loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log("error msg is...", error.message);
            });
    };

    const handleSignOut = () => {
        //!https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser(null);
            })
            .catch((error) => {
                // An error happened.
                console.log("error on Sign Out...", error);
            });
    };

    return (
        <div>
            {/* //! user ? logout : sign in */}
            {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button>Github Login</button>
                </>
            )}

            {/* //! Conditional rendering */}
            {user && (
                <div>
                    <h3>User: {user?.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="Your Photo" />
                </div>
            )}
        </div>
    );
};

export default Login;
