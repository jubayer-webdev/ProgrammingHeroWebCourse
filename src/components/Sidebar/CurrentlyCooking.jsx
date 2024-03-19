import PropTypes from "prop-types";

const CurrentlynowCooking = ({ nowCooking, totalTime, totalCalories }) => {
    //! When no cook on the side bar
    if (nowCooking.length == 0) {
        return (
            <div className="flex flex-col items-center">
                <div className=" pb-2 pt-5 text-xl font-semibold">Currently nowCooking</div>
                <hr className="w-1/2 bg-[#28282826] mb-3" />
                <div className="px-5 text-center text-[#878787] text-sm">No food is nowCooking right now!</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className=" pb-2 pt-5 text-xl font-semibold">Currently Cooking: {nowCooking.length < 10 && nowCooking.length > 0 ? "0" + nowCooking.length : nowCooking.length}</div>
            <hr className="w-1/2 bg-[#28282826] mb-3" />

            {/* //!Showing The Table Data */}
            <table className="px-0 w-full">
                <thead className="text-[#878787] fira-sans">
                    <tr className="">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                {/* //! Showing the individual Data of Cooking */}
                <tbody className="fira-sans text-[#282828B3] bg-[#28282808]">
                    {nowCooking.map((cook, index) => (
                        <tr key={cook.recipe_id}>
                            <td className="text-[#282828CC] font-bold">{index + 1}</td>
                            <td>{cook.recipe_name}</td>
                            <td>{cook.preparing_time} minutes</td>
                            <td>{cook.calories} calories</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* //!When Clicking "Preparing Button this will re-render" */}
            {nowCooking.length && (
                <div className="flex justify-end gap-5 w-full pr-5 mt-3 mb-5 text-[#282828CC]">
                    <div className="max-w-28">Total Time = {totalTime} minutes</div>
                    <div className="max-w-32">Total Calories = {totalCalories} calories</div>
                </div>
            )}
        </div>
    );
};

CurrentlynowCooking.propTypes = {
    nowCooking: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired,
};

export default CurrentlynowCooking;
