import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
    };

    return (
        <div>
            <h3 className="text-6xl mb-7">Update information of {loadedUser.name}</h3>
            {/* //! form */}
            <form onSubmit={handleUpdate}>
                <input className="mb-2 p-2" type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input className="mb-2 p-2" type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input className="btn btn-success btn-outline" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
