import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadAndWishlistBooks from "../ReadAndWishlistBooks/ReadAndWishlistBooks";
import { IoIosArrowDropdown } from "react-icons/io";
import "./ListedBooks.css";

const ListedBooks = () => {
    const books = useLoaderData();
    const [allReadBooks, setAllReadBooks] = useState([]);
    const [allWishlistBooks, setAllWishlistBooks] = useState([]);

    //! This is for Read Books
    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();

        //! here the serial of stored book won't maintain
        // const readBooks = books.filter((book) => storedReadBooks.includes(book.bookId));
        //!2nd method
        const readBooks = [];
        for (const id of storedReadBooks) {
            const book = books.find((bk) => bk.bookId === id);
            if (book) {
                readBooks.push(book);
            }
        }
        setAllReadBooks(readBooks);
    }, []);

    //!This is for Wishlist Books
    useEffect(() => {
        const storedWishlistBooks = getStoredWishlistBooks();

        //! here the serial of stored book won't maintain
        // const wishlistBooks = books.filter((book) => storedWishlistBooks.includes(book.bookId));
        //!2nd method
        const wishlistBooks = [];
        for (const id of storedWishlistBooks) {
            const book = books.find((bk) => bk.bookId === id);
            if (book) {
                wishlistBooks.push(book);
            }
        }
        setAllWishlistBooks(wishlistBooks);
    }, []);

    //! For sorting
    const handleSorting = (type) => {
        if (type === "rating") {
            //! Copy the allReadBooks
            const readingRatingSort = [...allReadBooks];
            readingRatingSort.sort((a, b) => b.rating - a.rating);
            setAllReadBooks(readingRatingSort);

            //! Copy the allWishlistBooks
            const wishlistRatingSort = [...allWishlistBooks];
            wishlistRatingSort.sort((a, b) => b.rating - a.rating);
            setAllWishlistBooks(wishlistRatingSort);
        } else if (type === "page") {
            const readingPageSort = [...allReadBooks];
            readingPageSort.sort((a, b) => b.totalPages - a.totalPages);
            setAllReadBooks(readingPageSort);
            //! This is for allWishlistBooks
            const wishlistPageSort = [...allWishlistBooks];
            wishlistPageSort.sort((a, b) => b.totalPages - a.totalPages);
            setAllWishlistBooks(wishlistPageSort);
        } else if (type === "publish-year") {
            const readingPublishSort = [...allReadBooks];
            readingPublishSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setAllReadBooks(readingPublishSort);
            //! This is for allWishlistBooks
            const wishlistPublishSort = [...allWishlistBooks];
            wishlistPublishSort.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setAllWishlistBooks(wishlistPublishSort);
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center p-8 bg-[#1313130D]">Books</h2>

            {/* //! https://daisyui.com/components/dropdown/ */}
            <div className="text-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-accent m-1 text-xl">
                        Sort By
                        <IoIosArrowDropdown />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-xl">
                        <li onClick={() => handleSorting("rating")}>
                            <a>Rating</a>
                        </li>
                        <li onClick={() => handleSorting("page")}>
                            <a>Number of pages</a>
                        </li>
                        <li onClick={() => handleSorting("publish-year")}>
                            <a>Publisher year</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* //! https://daisyui.com/components/tab/ */}
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {allReadBooks.map((book) => (
                        <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>
                    ))}
                </div>
                {/* //! This is for wishlistBooks */}
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {allWishlistBooks.map((book) => (
                        <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
