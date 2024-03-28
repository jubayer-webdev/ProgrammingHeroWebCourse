import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BookSection = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[]);

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center">Books: {books.length}</h1>
            <div className="grid lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <BookCard key={book.bookId} book={book}></BookCard>
                ))}
            </div>
        </div>
    );
};

export default BookSection;
