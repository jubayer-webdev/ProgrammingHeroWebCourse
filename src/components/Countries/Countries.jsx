import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    //!state যেখানে eventHandler সেখানে
    const [visitedCountries, setVisitedCountires] = useState([]);
    //! 40-1 video
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountry = (country) => {
        console.log("add this to your visied country");
        console.log(country);
        //!won't work visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountires(newVisitedCountries);
    };

    return (
        <div>
            <h3>Countries {countries.length}</h3>
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {visitedCountries.map((country) => (
                        <li key={country.cca3}>{country.name.common}</li>
                    ))}
                </ul>
            </div>
            <div className="country-container">
                {/* //! 40-2 video */}
                {countries.map((country) => (
                    <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
