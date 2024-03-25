import { useContext } from "react";
import { AssetContext, ExperimentContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    const textContext = useContext(ExperimentContext);

    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Give the gift through Context API: {gift}</p>
            <h6>
                <i>
                    <strong>ExperimentalContext: {textContext}</strong>
                </i>
            </h6>
        </div>
    );
};

export default Special;
