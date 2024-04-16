import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        //!https://daisyui.com/components/loading/
        return (
            <>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </>
        );
    }

    if (user) {
        return children;
    }

    //! https://reactrouter.com/en/6.22.3/components/navigate
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
