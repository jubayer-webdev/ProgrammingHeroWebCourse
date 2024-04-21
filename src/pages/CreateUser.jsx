const CreateUser = () => {
    const handleAddUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(user);

        //! send new data to server
        //! https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
        fetch("http://localhost:5000/users", {
            method: "POST", //(case insensitive) or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.insertedId) {
                    alert("Users added successfully");
                    form.reset();
                }
            });
    };
    return (
        <div>
            <h1 className="text-6xl mb-7">Simple CRUD</h1>

            {/* //!create form */}
            <form onSubmit={handleAddUser}>
                <input className="mb-2 p-2" placeholder="Your name" type="text" name="name" id="" />
                <br />
                <input className="mb-2 p-2" placeholder="Your email" type="email" name="email" id="" />
                <br />
                <input className="btn btn-success" type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default CreateUser;
