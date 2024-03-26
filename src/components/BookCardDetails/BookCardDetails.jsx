import { useLoaderData, useParams } from "react-router-dom";
//!https://fkhadra.github.io/react-toastify/installation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredReadBooks, saveReadBooks, saveWishlistBooks } from "../../utility/localStorage";

const BookCardDetails = () => {
    const books = useLoaderData();
    const { idJame } = useParams();
    //! need to parseInt bcz idJame is a string
    const idJameInt = parseInt(idJame);
    const book = books.find((book) => book.bookId === idJameInt);

    const handleReadButtonToast = () => {
        const isAddOnRead = saveReadBooks(idJameInt);
        if (isAddOnRead) {
            toast.success("Books Added to ReadList", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        //!https://fkhadra.github.io/react-toastify/positioning-toast
        else {
            toast.warn("You have Already Read this book!", {
                position: "top-right",
                //!https://fkhadra.github.io/react-toastify/autoClose
                autoClose: 2000,
            });
        }
    };

    const handleWishlistButtonToast = () => {
        const storedReadBooks = getStoredReadBooks();
        const isIncludes = storedReadBooks.find((bookId) => bookId === idJameInt);
        if (isIncludes) {
            toast.warn("You have Already Read this book!", {
                position: "top-right",
                //!https://fkhadra.github.io/react-toastify/autoClose
                autoClose: 2000,
            });
            return;
        }

        const isAddOnWishlist = saveWishlistBooks(idJameInt);
        if (!isAddOnWishlist) {
            toast.warn("You have Already Wishlist this book!", {
                position: "top-right",
                //!https://fkhadra.github.io/react-toastify/autoClose
                autoClose: 2000,
            });
        } else {
            // toast("Books Added to Wishlist");
            toast.success("Books Added to Wishlist", {
                position: "top-right",
                autoClose: 2000,
                // closeOnClick: true,
            });
        }
    };

    return (
        <div>
            {/* //! https://daisyui.com/components/card/ */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={book.image} alt="Book" />
                </figure>

                <div className="card-body">
                    <h2>This is from BookCardDetails: {idJame}</h2>
                    <h2 className="card-title">{book.bookName}</h2>
                    <h2>By: {book.author}</h2>
                    <h2>{book.category}</h2>
                    <h2>review: {book.review}</h2>
                    <div className="flex gap-2 text-green-500">
                        {book.tags.map((tag, idx) => (
                            <h2 key={idx}>{tag}</h2>
                        ))}
                    </div>
                    <h2>{book.totalPages}</h2>
                    <h2>{book.publisher}</h2>
                    <h2>{book.yearOfPublishing}</h2>
                    <h2>{book.rating}</h2>

                    {/* //!2 bu˻on named - Read, Wishlist */}
                    <div className="card-actions justify-end">
                        <button onClick={handleReadButtonToast} className="btn btn-outline btn-accent">
                            Read
                        </button>
                        <button onClick={handleWishlistButtonToast} className="btn btn-success">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookCardDetails;
