import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    const handleDeleteUser = (id) => {
        console.log("delete", id);

        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert("Successfully deleted one document.");
                }
            });
    };

    return (
        <div>
            <h2 className="text-5xl">total users: {users.length}</h2>
            <div>
                {users.map((user) => (
                    <p key={user._id} className="mt-5">
                        {user.name} : {user.email} ---- {user._id} <button onClick={() => handleDeleteUser(user._id)} className="btn btn-sm btn-warning">X</button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
