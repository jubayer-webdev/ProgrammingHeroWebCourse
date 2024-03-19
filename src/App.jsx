import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Posts from "./components/Posts/Posts";
import WantToCook from "./components/Sidebar/WantToCook";
import CurrentlyCooking from "./components/Sidebar/CurrentlyCooking";
import toast, { Toaster } from "react-hot-toast";
import { PiWarningFill } from "react-icons/pi";

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

    //! When click on the "Want to Cook" button
    const handleWantToCookButton = (cook) => {
        console.log("wantToCookButton is clicked", cook);

        const isExist = wishToCook.find((wishCook) => wishCook.recipe_id == cook.recipe_id);

        if (!isExist) {
            setWishToCook([...wishToCook, cook]);
        } else {
            toast(() => <div className="text-white">{cook.recipe_name} is already been added!</div>, {
                icon: (
                    <span className="text-3xl text-orange-500">
                        <PiWarningFill></PiWarningFill>
                    </span>
                ),
                style: { backgroundColor: "black" },
            });
        }
    };

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Toaster></Toaster>

            {/* //!Side Bar */}
            <SectionTitle title="Our Recipes" subtitle="Unlock Flavorful Delights: Dive into Our Exquisite Recipe Collection!"></SectionTitle>

            <div className="flex lg:flex-row flex-col gap-5">
                <div className="flex-1">
                    <Posts cooks={cooks} handleWantToCookButton={handleWantToCookButton}></Posts>
                </div>
                {/* //! This is for side bar */}
                <div className="lg:w-[40%]">
                    <div className="border-[1px] rounded-xl py-5">
                        <WantToCook wishToCook={wishToCook}></WantToCook>
                        {/* <CurrentlyCooking nowCooking={nowCooking}></CurrentlyCooking> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
