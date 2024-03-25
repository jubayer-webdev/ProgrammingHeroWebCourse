import JameT from "prop-types";
import Special from "../Special/Special";
import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === "Rubaiya" && <Friend></Friend>}
            </section>
        </div>
    );
};
Cousin.propTypes = {
    name: JameT.string,
};
export default Cousin;
