import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mb-28 rounded-3xl block lg:flex justify-center items-center lg:px-32 lg:py-16 mt-24 bg-[#1313130F]">
            <div>
                <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                <NavLink to={"/listedBooks"}>
                    <button className="mt-6 bg-[#23BE0A] px-7 py-5 text-xl text-white font-bold rounded-2xl">View The List</button>
                </NavLink>
            </div>
            <div className="mt-5 lg:w-1/2">
                <img src="/src/assets/bannerBook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
