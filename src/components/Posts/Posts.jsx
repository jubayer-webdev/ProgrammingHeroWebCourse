import PropTypes from "prop-types";
import Post from "./Post";

const Posts = ({ cooks, handleWantToCookButton }) => {
    return (
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {cooks.map((cook) => (
                <Post key={cook.recipe_id} cook={cook} handleWantToCookButton={handleWantToCookButton}></Post>
            ))}
        </div>
    );
};

Posts.propTypes = {
    cooks: PropTypes.array.isRequired,
    handleWantToCookButton: PropTypes.func.isRequired,
};

export default Posts;
