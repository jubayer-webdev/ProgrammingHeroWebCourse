import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const giftFromContextAPI = useContext(AssetContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {giftFromContextAPI}</p>
        </div>
    );
};

export default Friend;
