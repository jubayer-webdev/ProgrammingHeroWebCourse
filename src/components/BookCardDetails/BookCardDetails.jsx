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
            <div className="card lg:card-side bg-base-100 shadow-xl mt-14">
                <figure className="bg-[#1313130F] lg:w-[40%] lg:p-16">
                    <img className="w-[50%] lg:w-full" src={book.image} alt="Book" />
                </figure>

                <div className="card-body">
                    <h2 className="text-xl">This is from BookCardDetails: {idJame}</h2>
                    <h2 className="card-title text-4xl font-semibold">{book.bookName}</h2>
                    <h2 className="text-xl mb-10">
                        By: <b>{book.author}</b>
                    </h2>
                    <hr />
                    <b className="text-xl mb-7">{book.category}</b>
                    <hr />
                    <h2 className="text-xl">
                        <b>review:</b> {book.review}
                    </h2>

                    <div className="flex gap-2 text-green-500 mb-12">
                        <b className="text-black">Tags</b>
                        {book.tags.map((tag, idx) => (
                            <h2 key={idx}>#{tag}</h2>
                        ))}
                    </div>
                    <hr />

                    <div className="text-xl flex gap-12">
                        <div>
                            <h2>Number of Pages:</h2>
                            <h2>Publisher:</h2>
                            <h2>Year of Publishing:</h2>
                            <h2>Rating:</h2>
                        </div>
                        <div>
                            <h2>
                                <b>{book.totalPages}</b>
                            </h2>
                            <h2>
                                <b>{book.publisher}</b>
                            </h2>
                            <h2>
                                <b>{book.yearOfPublishing}</b>
                            </h2>
                            <h2>
                                <b>{book.rating}</b>
                            </h2>
                        </div>
                    </div>

                    {/* //!2 buton named - Read, Wishlist */}
                    <div className="card-actions mt-7">
                        <button onClick={handleReadButtonToast} className="rounded-2xl bg-green-300 font-bold hover:bg-green-700 px-7 py-4">
                            Read
                        </button>
                        <button onClick={handleWishlistButtonToast} className="rounded-2xl hover:bg-[#12b4dd] bg-[#438292] px-7 py-4 text-white font-bold">
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
