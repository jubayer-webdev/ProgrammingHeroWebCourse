import useInputState from "../hooks/useInputState";

const CustomHookForm = () => {
    const [name, handleNameChange] = useInputState("defaultName");
    console.log(useInputState('jame'));

    const handleSubmit = (e) => {
        console.log('CustomHookForm name = ', name);
        console.log('handleNameChange = ', handleNameChange);
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="firstInput" />
                <br />
                <input type="email" name="secondInput" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CustomHookForm;
