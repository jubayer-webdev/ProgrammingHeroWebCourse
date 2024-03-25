const ReusableForm = ({ formTitleProps, handleSubmit, submitBtnText = "Submit", children }) => {
    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.firstInput.value,
            email: e.target.secondInput.value,
            password: e.target.password.value,
        };
        handleSubmit(data);
    };

    return (
        <div>
            <h2>{formTitleProps}</h2>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="firstInput" placeholder="Give Your Name" />
                <br />
                <input type="email" name="secondInput" placeholder="email" id="" />
                <br />
                <input type="password" name="password" placeholder="password" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;
