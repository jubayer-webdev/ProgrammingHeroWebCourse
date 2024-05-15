// https://github.com/shakilahmedatik/soloSphere-resources/blob/main/pages/AllJobs.jsx

import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import axios from "axios";

const AllJobs = () => {
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");
    const [searchText, setSearchText] = useState("");

    // -------------------------- Copy From TabCategories Start --------------------
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs?currentPage=${currentPage}&sizePerPage=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`);
            setJobs(data);
            // setCount(data.length);
        };
        getData();
    }, [currentPage, filter, itemsPerPage, search, sort]);
    // console.log(jobs);
    //  -------------------------- Copy From TabCategories End --------------------
    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs-count?filter=${filter}&search=${search}`);
            setCount(data.count);
        };
        getCount();
    }, [filter, search]);

    // console.log("total data number =", count);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
    // console.log("pages = ", pages.length);

    //!  handle pagination button
    const handlePaginationButton = (value) => {
        // console.log("currentPage =", value);
        setCurrentPage(value);
    };

    console.log("currentPage =", currentPage);
    console.log("numberOfPages =", numberOfPages);
    const handleReset = () => {
        setFilter("");
        setSort("");
        setSearch("");
        // setSearchText("");
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // const text = e.target.search.value;
        // setSearch(text);
        // setCurrentPage(1);
        console.log("This is handleSearch Function, text =", search, "currentPage =", currentPage);
        // setSearch(searchText);
    };

    return (
        <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
            <div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
                    {/* //! Filter By Web/Graphics/Marketing */}
                    <div>
                        <select
                            onChange={(e) => {
                                setFilter(e.target.value);
                                console.log("filter =", filter);
                                setCurrentPage(1);
                            }}
                            name="sort"
                            id="sort"
                            value={filter}
                            className="border p-4 rounded-lg"
                        >
                            <option value="">Filter By Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                    </div>

                    {/* //! SEARCH */}
                    <form onSubmit={handleSearch}>
                        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    console.log("From SEARCH onChange");
                                    setCurrentPage(1);
                                }}
                                // From Conceptual session
                                // onChange={(e) => {
                                //     setSearchText(e.target.value);
                                //     console.log(e.target.value);
                                //     console.log("searchText =", searchText);
                                // }}
                                // value={searchText}
                                value={search}
                                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                                type="text"
                                name="search"
                                placeholder="Enter Job Title"
                                aria-label="Enter Job Title"
                            />

                            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Search</button>
                        </div>
                    </form>

                    {/* //! Sort By Deadline/Descending/Ascending */}
                    <div>
                        <select
                            onChange={(e) => {
                                setSort(e.target.value);
                                setCurrentPage(1);
                            }}
                            value={sort}
                            name="sort"
                            id="sort"
                            className="border p-4 rounded-md"
                        >
                            <option value="">Sort By Deadline</option>
                            <option value="dsc">Descending Order</option>
                            <option value="asc">Ascending Order</option>
                        </select>
                    </div>

                    {/* //! Reset button */}
                    <button onClick={handleReset} className="btn">
                        Reset
                    </button>
                </div>

                {/* //! JobCard */}
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {jobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </div>
            </div>

            {/* //! ------------------------ PAGINATION Section START ----------------- */}
            <div className="flex justify-center mt-12">
                {/* //! Previous Button */}
                <button disabled={currentPage === 1} onClick={() => handlePaginationButton(currentPage - 1)} className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">
                    <div className="flex items-center -mx-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>

                        <span className="mx-1">previous</span>
                    </div>
                </button>

                {/* //! Pagination Numbers */}
                {pages.map((btnNum) => (
                    <button onClick={() => handlePaginationButton(btnNum)} key={btnNum} className={`hidden ${currentPage === btnNum ? "bg-blue-500 text-white" : ""} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}>
                        {btnNum}
                    </button>
                ))}

                {/* //! Next Button */}
                <button
                    /*disabled={currentPage === numberOfPages}*/
                    disabled={currentPage >= numberOfPages}
                    onClick={() => handlePaginationButton(currentPage + 1)}
                    className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
                >
                    <div className="flex items-center -mx-1">
                        <span className="mx-1">Next</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </button>
            </div>
            {/* //! ------------------------ PAGINATION Section END  ------------------- */}
        </div>
    );
};

export default AllJobs;
