import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

//! It is our RootLayout
const Main = () => {
    return (
        <div>
            {/*//! Navbar  */}
            <Navbar />

            {/*//! Outlet */}
            <Outlet />

            {/*//! Footer */}
        </div>
    );
};

export default Main;
