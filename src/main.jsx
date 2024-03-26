import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JobDetails from "./components/JobDetails/JobDetails";

const routerName = createBrowserRouter([
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
                path: "/applied",
                element: <AppliedJobs></AppliedJobs>,
                //! warning: do not load all the data, only load tha data you need.
                loader: () => fetch("jobs.json"),
            },
            //!Dynamic Route
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                //!Not best way (do not load all data, load only what you need)
                loader: () => fetch("jobs.json"),
                //fetch("../jobs.json");
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routerName} />
    </React.StrictMode>
);
