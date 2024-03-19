import PropTypes from "prop-types";

const CurrentlyCooking = ({ nowCooking }) => {
    //! When no cook on the side bar
    if (nowCooking.length == 0) {
        return (
            <div className="flex flex-col items-center">
                <div className=" pb-2 pt-5 text-xl font-semibold">Currently Cooking</div>
                <hr className="w-1/2 bg-[#28282826] mb-3" />
                <div className="px-5 text-center text-[#878787] text-sm">No food is cooking right now!</div>
            </div>
        );
    }
};

CurrentlyCooking.propTypes = {
    nowCooking: PropTypes.array.isRequired,
};

export default CurrentlyCooking;
