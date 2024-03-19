import PropTypes from "prop-types";
import { GoClock } from "react-icons/go";
import { AiOutlineFire } from "react-icons/ai";
import { useState } from "react";

const Post = ({ cook }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = cook;

    //!when click the see more... in card
    const [more, setMore] = useState(4);
    const [click, setClick] = useState(false);

    const handleMore = () => {
        console.log("clicked on the see more...");
        setMore(cook.ingredients.length);
        setClick(true);
    };

    return (
        <div className="border-[1px] flex flex-col items-center px-5 py-5 rounded-2xl max-w-[379px]">
            <img className="w-[331px] max-h-[250px] rounded-xl" src={recipe_image} />
            <div className="mt-3">
                {/* //! This is the 1st part of card */}
                <div className=" text-xl font-semibold text-[#282828]">{recipe_name}</div>
                <div className="text-sm text-[#878787] mb-3 fira-sans mt-3">{short_description}</div>
                <hr />

                {/* //!This is Ingredients Parts */}
                <div className=" mt-2 mb-2 font-semibold text-[#282828]">Ingredients: {ingredients.length}</div>
                <ul className="list-disc pl-7 mb-1 text-[#878787] fira-sans">
                    {/* //!When click on the see more... this part will be re-rendered */}
                    {ingredients.slice(0, more).map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                {!click && (
                    <div onClick={handleMore} className="underline text-[#2ebf83] text-sm mb-3 text-center cursor-pointer w-full">
                        See more...
                    </div>
                )}
                <hr />

                {/* //!This is last part */}
                <div className="flex items-center gap-10 mt-3 text-[#282828CC]">
                    <div className="flex items-center gap-1">
                        <span className="text-xl">
                            <GoClock></GoClock>
                        </span>
                        {preparing_time} minutes
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-xl">
                            <AiOutlineFire></AiOutlineFire>
                        </span>
                        {calories} calories
                    </div>
                </div>
                <button className="btn bg-[#0BE58A] mt-5 font-semibold rounded-full px-6 py-3">Want to Cook</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    cook: PropTypes.object.isRequired,
};

export default Post;
