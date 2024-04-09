import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const handleRegister = (e) => {
        //! prevent reload the page when click on submit
        e.preventDefault();
        const email = e.target.emaiL.value;
        const password = e.target.passworD.value;
        console.log(email, password);
        //! Create User
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="border">
            <div className="mx-auto md:w-1/2 border">
                <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4" type="email" placeholder="Email Address" name="emaiL" id="" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4" type="password" placeholder="Password" name="passworD" id="" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;
