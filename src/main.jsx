import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import BookCardDetails from "./components/BookCardDetails/BookCardDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import CustomShapeBarChart from "./components/CustomShapeBarChart/CustomShapeBarChart";
import BookSection from "./components/BookSection/BookSection";

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
                loader: () => fetch("/generalAndislamicBook.json"),
            },
            //!Dynamic Route
            {
                path: "/bookCard/:idJame",
                //!Not best way (do not load all data, load only what you need)
                loader: () => fetch("/books.json"),
                element: <BookCardDetails></BookCardDetails>,
                //fetch("../jobs.json");
            },
            {
                path: "/pageToRead",
                // loader: () => fetch("/books.json"),
                loader: () => fetch("/generalAndislamicBook.json"),
                element: <CustomShapeBarChart></CustomShapeBarChart>,
            },
            //! This is extra two button
            {
                path: "/islamicBook",
                loader: () => fetch("/islamicBook.json"),
                element: <BookSection bookLink={"islamicBook"}></BookSection>,
            },
            //! Dynamic Route
            {
                path: "/islamicBook/:idJame",
                loader: () => fetch("/islamicBook.json"),
                element: <BookCardDetails></BookCardDetails>,
            },
            {
                path: "/bestCellar",
                loader: () => fetch("/bestCellarData.json"),
                element: <BookSection bookLink={"bestCellarData"}></BookSection>,
            },
            //! Dynamic
            {
                path: "/bestCellar/:idJame",
                loader: () => fetch("/bestCellarData.json"),
                element: <BookCardDetails></BookCardDetails>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
