import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
    //! 7:25 Minute: useLoaderData(), Route এ আসার আগে data কে load করে নিয়ে আসে। 
    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h2>Out Users: {users.length}</h2>
            <p>Fantastic and nice users</p>
            <div className="container">
                {users.map((user) => (
                    <User key={user.id} user={user}></User>
                ))}
            </div>
        </div>
    );
};

export default Users;
