const Banner = () => {
    return (
        <div className="block lg:flex px-32 py-20">
            <div className="mr-20">
                <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
                <button className="mt-6 btn btn-accent">View The List</button>
            </div>
            <div>
                <img src="/src/assets/bannerBook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
