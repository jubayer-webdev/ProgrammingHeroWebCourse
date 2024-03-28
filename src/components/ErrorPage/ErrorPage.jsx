import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            {/* //! <Link> doesn't reload a page. Eventually it turns in anchor on Browser*/}
            <Link to={"/"}>
                <button className="btn btn-warning">Go back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
