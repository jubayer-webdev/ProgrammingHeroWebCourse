import Banner from "../Banner/Banner";
import BookSection from "../BookSection/BookSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookSection bookLink={"books"}></BookSection>
        </div>
    );
};

export default Home;
