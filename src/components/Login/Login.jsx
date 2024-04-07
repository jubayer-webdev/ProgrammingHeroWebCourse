import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    return (
        <div>
            <button>Google Login</button>
        </div>
    );
};

export default Login;
