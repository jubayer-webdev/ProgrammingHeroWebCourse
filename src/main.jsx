import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import BookCardDetails from "./components/BookCardDetails/BookCardDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import ErrorPage from "./components/ErrorPage/ErrorPage";

//! https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/listedBooks",
                element: <ListedBooks></ListedBooks>,
                //! warning: do not load all the data, only load tha data you need.
                loader: () => fetch("../public/books.json"),
            },
            //!Dynamic Route
            {
                path: "/bookCard/:idJame",
                element: <BookCardDetails></BookCardDetails>,
                //!Not best way (do not load all data, load only what you need)
                loader: () => fetch("../public/books.json"),
                //fetch("../jobs.json");
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
