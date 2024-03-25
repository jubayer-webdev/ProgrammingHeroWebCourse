import JameT from "prop-types";


const Cousin = ({ name }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
        </div>
    );
};
Cousin.propTypes = {
    name: JameT.string,
};
export default Cousin;
