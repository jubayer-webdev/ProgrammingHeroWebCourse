import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import Update from "./pages/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                element: <CreateUser></CreateUser>,
            },
            {
                path: "/users",
                element: <Users></Users>,
                loader: () => fetch("http://localhost:5000/users"),
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
            },
        ],
    },
    // {
    //     path: "/users",
    //     element: <Users></Users>,
    //     loader: () => fetch("http://localhost:5000/users"),
    // },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
