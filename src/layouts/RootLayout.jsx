import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <div className="p-4 bg-blue-500 text-white mb-4">
                <ul className="flex flex-row gap-4 items-center">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
            {/* <Navbar /> */}
            <Outlet />
        </>
    );
};

export default RootLayout;
