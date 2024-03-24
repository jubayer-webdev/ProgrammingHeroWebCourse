import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    //! to focus the cursor
    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("nameRef = ", nameRef);
        console.log("nameRef.current = ", nameRef.current);
        console.log("nameRef.current.value = ", nameRef.current.value);
        console.log("emailRef.current.value = ", emailRef.current.value);
        console.log("passwordRef.current.value = ", passwordRef.current.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="firstInput" />
                <br />
                <input ref={emailRef} defaultValue={'default@value.com'} type="email" name="secondInput" id="" />
                <br />
                <input ref={passwordRef} type="password" name="pass" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;
