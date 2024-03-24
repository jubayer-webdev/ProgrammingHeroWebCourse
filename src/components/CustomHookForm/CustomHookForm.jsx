import useInputState from "../hooks/useInputState";

const CustomHookForm = () => {
    // const [name, handleNameChange] = useInputState("defaultName");
    // console.log(useInputState("jame"));

    const emailState = useInputState("default@email.go");
    console.log("emailState = ", emailState);

    // const {value, onChange} = {...emailState};
    // console.log(value);
    // console.log(onChange

    const handleSubmit = (e) => {
        // console.log("CustomHookForm name = ", name);
        // console.log("handleNameChange = ", handleNameChange);
        console.log("emailState.value = ", emailState.value);
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="firstInput" /> */}
                <br />
                <input {...emailState} type="email" name="secondInput" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;
