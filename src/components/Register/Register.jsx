import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
        //! prevent reload the page when click on submit
        e.preventDefault();
        //! Reset Error
        setRegisterError("");
        //! Reset Success
        setSuccess("");

        const email = e.target.emaiL.value;
        const password = e.target.passworD.value;
        console.log("from Register...", email, password);

        // console.log(typeof password);
        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters or Longer");
            return;
        }

        //! Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                //! set success
                setSuccess("User Created Successfully.");
            })
            .catch((error) => {
                console.error(error);

                //! set error
                setRegisterError(error.message);
            });
    };

    return (
        <div className="border">
            <div className="mx-auto md:w-1/2 border">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4" type="email" placeholder="Email Address" name="emaiL" id="" required />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4" type="password" placeholder="Password" name="passworD" id="" required />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
                </form>
                {/* //!Showing The Error Message */}
                {registerError && <p className="text-red-700">{registerError}</p>}
                {/* //!Showing The Success Message */}
                {success && <p className="text-green-600">{success}</p>}
            </div>
        </div>
    );
};

export default Register;
