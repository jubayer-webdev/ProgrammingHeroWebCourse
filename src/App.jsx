import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <Toaster />
        </AuthProvider>
    );
}

export default App;
