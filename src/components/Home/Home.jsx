import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log("location", location);

    return (
        <div>
            <Header></Header>
            {/* //!Where to show children:[], কোন রাউটারে গেলে কি দেখাবো সেটার জন্য <Outlet/> */}
            {navigation.state === "loading" ? <p>Loading... or add spinner </p> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Home;
