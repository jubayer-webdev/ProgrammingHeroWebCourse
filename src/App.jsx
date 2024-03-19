import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner"
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <SectionTitle title="Our Recipes" subtitle="Unlock Flavorful Delights: Dive into Our Exquisite Recipe Collection!"></SectionTitle>
        </>
    );
}

export default App;
