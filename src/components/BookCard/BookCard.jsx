import anyName from "prop-types";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        //! Dynamic link
        <Link to={`/bookCard/${bookId}`}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
                <figure className="bg-[#F3F3F3] lg:px-24 lg:py-14 mb-6">
                    <img src={image} alt="Image" />
                </figure>
                <div className="card-body my-4">
                    <div className="text-[#23BE0A] text-lg font-medium flex gap-3">
                        {tags.map((tag, idx) => (
                            <span key={idx}>{tag}</span>
                        ))}
                    </div>
                    <h2 className="card-title text-3xl">{bookName}</h2>
                    <p className="text-lg">By: {author}</p>
                    <hr></hr>
                    <div className="flex justify-between font-normal text-[#131313CC] text-lg mt-10">
                        <p>{category}</p>
                        <p className="flex gap-3 justify-center items-center">
                            {rating} <FaRegStar />
                        </p>
                    </div>
                </div>

                {/* <div className="card-actions">
                    <Link to={`/bookCard/${bookId}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div> */}
            </div>
        </Link>
    );
};

BookCard.propTypes = {
    book: anyName.object,
};

export default BookCard;
