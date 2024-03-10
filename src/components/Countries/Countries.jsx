import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

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
            {/* //! 40-2 video */}
            {countries.map((country) => (
                <Country key={country.cca3} country={country}></Country>
            ))}
        </div>
    );
};

export default Countries;
