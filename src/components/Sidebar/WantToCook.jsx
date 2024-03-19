import anyName from "prop-types";

const WantToCook = ({ wishToCook }) => {
    //! When no cook is click
    if (wishToCook.length == 0) {
        return (
            <div className="flex flex-col items-center">
                <div className=" pb-2 pt-5 text-xl font-semibold">Want to cook</div>
                <hr className="w-1/2 bg-[#28282826] mb-3" />
                <div className="px-5 text-center text-[#878787] text-sm">There is no food to cook! Add some.</div>
            </div>
        );
    }
};

WantToCook.propTypes = {
    wishToCook: anyName.array.isRequired,
};

export default WantToCook;
