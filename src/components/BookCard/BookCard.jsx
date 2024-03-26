import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const {bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-6">
            <figure>
                <img src={image} alt="Image" />
            </figure>
            <div className="card-body text-base my-4">
                <div className="text-[#23BE0A] font-bold flex gap-3">
                    <p>{tags}</p>
                    <p>{bookName}</p>
                </div>
                <h2 className="card-title text-2xl">{bookName}</h2>
                <p>By: {author}</p>
                <hr></hr>
                <div className="flex justify-between font-normal text-[#131313CC] mt-10">
                    <p>{category}</p>
                    <p>{rating}</p>
                </div>
            </div>

            <div className="card-actions">
                {/* //!Dynamic link */}
                <Link to={`/bookCard/${bookId}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
