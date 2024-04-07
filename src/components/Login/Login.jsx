import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('handleGoogleSignIn');
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default Login;
