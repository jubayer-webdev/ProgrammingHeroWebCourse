import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";

const Home = () => {
    return (
        <div className="container px-4 mx-auto py-10">
            <Carousel />
            <TabCategories />
        </div>
    );
};

export default Home;
