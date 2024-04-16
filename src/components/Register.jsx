import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
    const authInfo = useContext(AuthContext);
    console.log("authInfo...", authInfo);
    const { createUser } = authInfo;

    const handleLogin = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //! Create User in firebase
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
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
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    {/* //!Form */}
                    <form onSubmit={handleLogin} className="card-body">
                        {/* //! added name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        {/* //! Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        {/* //! Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {/* //! Toggle Login and Register */}
                    <p>
                        Already have account...? Please{" "}
                        <Link to="/login">
                            <button className="btn btn-ghost">Login</button>
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
