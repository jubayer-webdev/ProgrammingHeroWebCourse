import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
