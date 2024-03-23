import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                {/* //!Using <Link> for avoiding reload page */}
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                {/* <a href="/">Home</a> */}
                <Link to="/about">About</Link>
                {/* <a href="/about">About</a> */}
                <Link to="/contact">Contact</Link>
                {/* <a href="/contact">Contact Us</a> */}
            </nav>
        </div>
    );
};

export default Header;
