import { NavLink } from "react-router-dom";

const ReadAndWishlistBooks = ({ book }) => {
    const {bookId, image} = book;

    return (
        //! https://daisyui.com/components/card/
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Book" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/bookCard/${bookId}`}>
                        <button className="btn btn-success">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ReadAndWishlistBooks;
