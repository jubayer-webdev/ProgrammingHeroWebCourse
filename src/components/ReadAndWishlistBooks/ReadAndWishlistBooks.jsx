import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadAndWishlistBooks = ({ book }) => {
    const { bookId, image } = book;

    return (
        //! https://daisyui.com/components/card/
        <div className="card lg:card-side bg-base-100 shadow-xl p-6 mb-6 border-red-900 border-2">
            <figure className="bg-[#1313130D] px-7 py-12">
                <img src={image} alt="Book" />
            </figure>
            <div className="card-body text-lg w-[100%]">
                {<p>BookId = {bookId}</p>}
                <h2 className="card-title text-3xl">{book.bookName}</h2>
                <p className="mb-6">
                    By: <b>{book.author}</b>
                </p>

                <div className="lg:flex gap-6">
                    <b>Tag</b>
                    {book.tags.map((tag, idx) => (
                        <button className="text-[#23BE0A] bth btn-active rounded-xl btn-ghost" key={idx}>
                            <b>#{tag}</b>
                        </button>
                    ))}
                    <b className="justify-start flex items-center gap-3">
                        <LuMapPin />
                        Year of Publishing: {book.yearOfPublishing}
                    </b>
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

                <div className="lg:flex gap-6">
                    <button className="bg-[#FFAC33] p-3 rounded-2xl">Category: {book.category}</button>
                    <button className="bg-[#328EFF26] p-3 rounded-2xl">Rating: {book.rating}</button>
                    <NavLink to={`/${book.type}/${bookId}`}>
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
