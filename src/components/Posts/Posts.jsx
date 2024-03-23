import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    console.log('posts', posts);

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="container">
                {posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
        </div>
    );
};

export default Posts;
