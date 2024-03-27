import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadAndWishlistBooks = ({ book }) => {
    const { bookId, image } = book;

    return (
        //! https://daisyui.com/components/card/
        <div className="card lg:card-side bg-base-100 shadow-xl p-6 mb-6">
            <figure className="bg-[#1313130D] px-7 py-12">
                <img src={image} alt="Book" />
            </figure>
            <div className="card-body text-lg">
                <h2 className="card-title text-3xl mb-4">{book.bookName}</h2>
                <p className="mb-4">By: {book.author}</p>

                <div className="lg:flex gap-8 mb-6">
                    <b>Tag</b>
                    {book.tags.map((tag, idx) => (
                        <b className="text-[#23BE0A]" key={idx}>
                            #{tag}
                        </b>
                    ))}
                    <p className="flex justify-center items-center gap-3">
                        <LuMapPin />
                        Year of Publishing: {book.yearOfPublishing}
                    </p>
                </div>

                <div className="mb-11 lg:flex gap-4">
                    <span className="flex justify-center items-center gap-2">
                        <FaUserFriends />
                        Publisher: {book.publisher}
                    </span>
                    <span className="flex justify-center items-center gap-2">
                        <MdOutlineFindInPage />
                        Page: {book.totalPages}
                    </span>
                </div>
                <hr />

                <div className="lg:card-actions">
                    <p>Category: {book.category}</p>
                    <p>Rating: {book.rating}</p>
                    <NavLink to={`/bookCard/${bookId}`}>
                        <button className="btn btn-success text-white text-lg">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

ReadAndWishlistBooks.propTypes = {
    book: PropTypes.object,
};

export default ReadAndWishlistBooks;
