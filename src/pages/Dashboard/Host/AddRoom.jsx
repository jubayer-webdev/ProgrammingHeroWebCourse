import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";

const AddRoom = () => {
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    //! Date range handler
    const handleDates = (item) => {
        setDates(item.selection);
    };

    return (
        <div>
            {/* Form */}
            <AddRoomForm dates={dates} />
        </div>
    );
};

export default AddRoom;
