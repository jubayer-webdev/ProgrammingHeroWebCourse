import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    //! 40-1 video
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div className="country-container">
                {/* //! 40-2 video */}
                {countries.map((country) => (
                    <Country key={country.cca3} country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
