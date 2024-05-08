import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//! It is our RootLayout
const Main = () => {
    return (
        <div>
            {/*//! Navbar  */}
            <Navbar />

            {/*//! Outlet */}
            {/* Nav(62 + 8 + 8) + Footer(173 + 32 + 32) = 305 */}
            {/*//! 100vh - 305px --- space is not allowed!!!  */}
            <div className="min-h-[calc(100vh-305px)]">
                <Outlet />
            </div>

            {/*//! Footer */}
            <Footer />
        </div>
    );
};

export default Main;
