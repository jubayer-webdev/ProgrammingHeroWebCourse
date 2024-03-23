import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log("err", err);

    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{err.statusText || err.message}</p>
            {err.status === 404 && (
                <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from</p>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ErrorPage;
