import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="block lg:flex px-32 py-20 mt-24">
            <div className="mr-20">
                <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                <NavLink to={"/listedBooks"}>
                    <button className="mt-6 btn btn-accent">View The List</button>
                </NavLink>
            </div>
            <div>
                <img src="/src/assets/bannerBook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
