//! This is for Read Button
const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-book');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();
    //!checking duplicate
    const isIncludes = storedReadBooks.find(bookId => bookId === id);
    if (!isIncludes) {
        storedReadBooks.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks));
        return true;
    }
    return false;
}
export { saveReadBooks, getStoredReadBooks }



//!This is for Wishlist Button
const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wishlist-book');
    if (storedWishlistBooks) {
        return JSON.parse(storedWishlistBooks);
    }
    return [];
}

const saveWishlistBooks = id => {
    const storedWishlistBooks = getStoredWishlistBooks();
    //!checking duplicate
    const isIncludes = storedWishlistBooks.find(bookId => bookId === id);
    if (!isIncludes) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-book', JSON.stringify(storedWishlistBooks));
        return true;
    }
    return false;
}
export { saveWishlistBooks, getStoredWishlistBooks }

/* //! Debug
const arr = ["John", 3, "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON);

const a = JSON.parse(myJSON);
console.log(a);

console.log(typeof (myJSON));
console.log(typeof (a));
*/
