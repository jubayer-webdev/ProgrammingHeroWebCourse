import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ReadAndWishlistBooks from "../ReadAndWishlistBooks/ReadAndWishlistBooks";

const ListedBooks = () => {
    const books = useLoaderData();
    const [allReadBooks, setAllReadBooks] = useState([]);
    const [allWishlistBooks, setAllWishlistBooks] = useState([]);

    //! This is for Read Books
    useEffect(() => {
        const storedReadBooks = getStoredReadBooks();

        const readBooks = books.filter((book) => storedReadBooks.includes(book.bookId));
        setAllReadBooks(readBooks);
    }, []);

    //!This is for Wishlist Books
    useEffect(() => {
        const storedWishlistBooks = getStoredWishlistBooks();

        const wishlistBooks = books.filter((book) => storedWishlistBooks.includes(book.bookId));
        setAllWishlistBooks(wishlistBooks);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-semibold text-center p-8 bg-[#1313130D]">Books</h2>
            {/* //! https://daisyui.com/components/tab/ */}
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {allReadBooks.map((book) => (
                        <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>
                    ))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-xl" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        allWishlistBooks.map(book => <ReadAndWishlistBooks key={book.bookId} book={book}></ReadAndWishlistBooks>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
