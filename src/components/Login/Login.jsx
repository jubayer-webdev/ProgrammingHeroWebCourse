import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    //! https://react.dev/reference/react/useRef
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        //! prevent reload the page when click on submit
        e.preventDefault();
        //! Reset Error
        setRegisterError("");
        //! Reset Success
        setSuccess("");

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("from Login...", email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log("From Login user...", result.user);

                //! set success
                setSuccess("User Logged in Successfully.");
            })
            .catch((error) => {
                console.error("From Login...", error);

                //! set error
                setRegisterError(error.message);
            });
    };

    const handleForgetPassword = () => {
        //! https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom
        console.log("send reset email...", emailRef.current.value);

        const email = emailRef.current.value;
        if (!email) {
            console.log("please provie an email.");
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("please write a valid email.");
            return;
        }

        //! Send Validation Email
        //!https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#send_a_password_reset_email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please Check Your Email...");
            })
            .catch((error) => {
                console.log("error form Login Reset Password...", error);
            });
    };

    return (
        //! https://daisyui.com/components/hero/
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* //! If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property. */}
                            {/* //!https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom */}
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover underline">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {/* //!Showing The Error Message */}
                    {registerError && <p className="text-red-700">{registerError}</p>}

                    {/* //!Showing The Success Message */}
                    {success && <p className="text-green-600">{success}</p>}

                    <p>
                        New to this website? Please{" "}
                        <Link to="/register" className="underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
