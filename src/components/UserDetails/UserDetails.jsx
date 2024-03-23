import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const details = useLoaderData();
    console.log("details", details);
    const { name, website } = details;

    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;
