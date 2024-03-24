import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState("default name");
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
        } else {
            setError("");
            console.log("from handleSubmit", name, email, password);
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        // console.log('handleEmailChage e.target = ',e.target);
        console.log("handleEmailChage e.target.value = ", e.target.value);
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="firstInput" />
                <br />
                <input onChange={handleEmailChange} type="email" name="secondInput" id="" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {error && <p>{error}</p>}
                <p>This is for test</p>
            </form>
        </div>
    );
};

export default StatefulForm;
