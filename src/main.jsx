import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//! React Route (https://reactrouter.com/en/main/start/tutorial)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
const anyName = createBrowserRouter([
    {
        path: "/",
        //! in element: HTML / JSX / component
        // element: <div>Hello from React router</div>,
        element: <Home></Home>,
        //! Nested Route
        children: [
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/users", 
                loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
                element: <Users></Users>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={anyName} />
    </React.StrictMode>
);
