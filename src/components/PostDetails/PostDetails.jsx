import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;

    //!https://reactrouter.com/en/main/hooks/use-navigate
    const navig = useNavigate();
    const handleGoBack = () => {
        //! go one step back
        navig(-1);
    };

    //! https://reactrouter.com/en/main/hooks/use-params
    const param = useParams();
    console.log("param", param);
    const { postId } = param;
    console.log("postId", postId);

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p>
                <small>{body}</small>
            </p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;
