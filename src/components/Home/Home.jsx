import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* //!Where to show children:[], কোন রাউটারে গেলে কি দেখাবো সেটার জন্য <Outlet/> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;
