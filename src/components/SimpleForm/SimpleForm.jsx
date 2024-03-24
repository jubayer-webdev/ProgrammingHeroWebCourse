const SimpleForm = () => {
    const handleSubmit = (event) => {
        //! to prevent default behavior (re-load) of form
        event.preventDefault();
        console.log("form submitted = ", event);
        console.log("event.target = ", event.target);
        console.log("event.target.firstInput = ", event.target.firstInput);
        console.log("event.target.firstInput.value = ", event.target.firstInput.value);
        console.log("event.target.secondInput.value = ", event.target.secondInput.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstInput" />
                <br />
                <input type="email" name="secondInput" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;
