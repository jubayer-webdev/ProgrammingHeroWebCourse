import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="m-20">
            <h1 className="text-6xl text-center text-purple-600 mb-16">Hot Hot Cold Coffee: {coffees.length}</h1>

            <div className="grid md:grid-cols-2 gap-4">
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
                ))}
            </div>
        </div>
    );
};

export default Home;
