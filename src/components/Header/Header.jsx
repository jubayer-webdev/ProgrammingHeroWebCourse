import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                {/* <a href="/">Home</a> */}
                {/* //!Using <Link> for avoiding reload page */}
                <Link to="/">Home</Link>
                {/* <Link to="/users">Users</Link> */}
                {/* //!https://reactrouter.com/en/main/start/tutorial#active-link-styling */}
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/posts">Posts</Link> */}
                {/* //!When use navlink, class='active' will automatically add */}
                <NavLink to="/posts">Posts</NavLink>
                {/* <a href="/about">About</a> */}
                <Link to="/about">About</Link>
                {/* <a href="/contact">Contact Us</a> */}
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;
