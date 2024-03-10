import { useState } from "react";
import { useEffect } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return (
        <div>
            <h3>Countries</h3>
        </div>
    );
};

export default Countries;
