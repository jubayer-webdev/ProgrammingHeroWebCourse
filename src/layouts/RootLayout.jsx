const RootLayout = () => {
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
            <h1>Simple CRUD</h1>

            {/* //!create form */}
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default RootLayout;
