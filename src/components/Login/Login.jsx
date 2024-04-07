import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //!Should set up sign-in-method google in firebase to avoid Firebase:Error(auth/configuration-not-found
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log("user info...", loggedInUser);
                setUser(loggedInUser);
            })
            .catch((error) => {
                console.log("error msg is...", error.message);
            });
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
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
