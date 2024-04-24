import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AddCoffee from "./pages/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/coffees"),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/updateCoffee",
                element: <h3 className="text-8xl">This is Demo Link 🙄</h3>,
            },
            {
                path: "/updateCoffee/:iid",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.iid}`),
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
