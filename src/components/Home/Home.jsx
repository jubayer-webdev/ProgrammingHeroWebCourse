import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the Home component</h2>
            {/* //!Where to show children:[] */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
