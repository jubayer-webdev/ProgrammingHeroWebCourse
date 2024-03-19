import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Posts from "./components/Posts/Posts";
import WantToCook from "./components/Sidebar/WantToCook";
import CurrentlyCooking from "./components/Sidebar/CurrentlyCooking";

function App() {
    const [cooks, setCooks] = useState([]);
    const [wishToCook, setWishToCook] = useState([]);
    const [nowCooking, setNowCooking] = useState([]);

    //! Fetching the json dada from public folder
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => {
                setCooks(data);
            });
    }, []);

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <SectionTitle title="Our Recipes" subtitle="Unlock Flavorful Delights: Dive into Our Exquisite Recipe Collection!"></SectionTitle>

            <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex-1">
                    <Posts cooks={cooks} />
                </div>
                {/* //! This is for side bar */}
                <div className="lg:w-[40%]">
                    <div className="border-[1px] rounded-xl py-5">
                        <WantToCook wishToCook={wishToCook}></WantToCook>
                        <CurrentlyCooking nowCooking={nowCooking}></CurrentlyCooking>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
