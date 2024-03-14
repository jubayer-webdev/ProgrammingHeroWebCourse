import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookMark = (blog) => {
        console.log("bookmark adding soon...");
        const newBookMarks = [...bookmarks, blog];
        setBookmarks(newBookMarks);
    };

    const handleMarkAsRead = (time) => {
        console.log("Mark As Read...", time);
        setReadingTime(readingTime + time);
    };

    return (
        <>
            <Header></Header>
            <div className="md:flex max-w-7xl mx-auto">
                <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
            </div>
        </>
    );
}

export default App;
