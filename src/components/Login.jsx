import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const authInfo = useContext(AuthContext);
    const { signInUser, signInWithGoogle } = authInfo;
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();

                //! https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    //! google popup
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result);

                //! https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        //! https://daisyui.com/components/hero/
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* //!Form */}
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {/* //! Toggle Login and Register */}
                    <p>
                        New to Here? Please{" "}
                        <Link to="/register">
                            <button className="btn btn-link">Register</button>
                        </Link>{" "}
                    </p>
                    {/* //! Google Login */}
                    <p>
                        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                            Google
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
