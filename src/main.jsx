import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//! React Route (https://reactrouter.com/en/main/start/tutorial)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello from React router</div>,
    },
    {
        path: "/about",
        element: <div>I am in the about page</div>,
    },
    {
        path: "/contact",
        element: <div>Call me right now!!</div>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
