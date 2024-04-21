import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Users from "./pages/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
    },
    {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
