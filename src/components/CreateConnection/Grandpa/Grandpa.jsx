import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const AssetContext = createContext("you can give default value");

const Grandpa = () => {
    const asset = "diamond";

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Father asset={asset}></Father>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value. value could be anything (string, dynamic value, function, array, obj.....etc)
 * 3.
 */
