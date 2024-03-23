import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px",
    };

    //!https://reactrouter.com/en/main/hooks/use-navigate
    const navigateKoro = useNavigate();
    const handleShowDetail = () => {
        navigateKoro(`/Jame/${id}`);
    };

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            {/* //!Dynamic Link */}
            <Link to={`/Jame/${id}`}>Post Details</Link>
            <Link to={`/Jame/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;
