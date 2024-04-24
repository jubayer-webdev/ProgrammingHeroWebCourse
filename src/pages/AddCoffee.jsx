import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        //! send data to the server
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("response data = ", data);
                // form.reset();
                if (data.insertedId) {
                    // https://sweetalert2.github.io/#download
                    Swal.fire({
                        title: "Success",
                        text: "Coffee Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });
    };

    return (
        <div className="bg-[#F4F3F0] p-28">
            <h2 className="text-3xl font-extrabold">Add a Coffee</h2>

            {/* //! https://daisyui.com/components/join/ */}
            <form onSubmit={handleAddCoffee}>
                {/* //! form name and quantity row */}
                <div className="md: flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="name" type="text" placeholder="Coffee Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="quantity" type="text" placeholder="Available Quantity" />
                        </label>
                    </div>
                </div>
                {/* //! form supplier and taste row */}
                <div className="md: flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="supplier" type="text" placeholder="Supplier Name" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="taste" type="text" placeholder="Taste" />
                        </label>
                    </div>
                </div>
                {/* //! form category and details row */}
                <div className="md: flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="category" type="text" placeholder="Category" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="details" type="text" placeholder="Details" />
                        </label>
                    </div>
                </div>
                {/* //! form Photo URL row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label>
                            <input className="input input-bordered w-full" name="photo" type="text" placeholder="Photo URL" />
                        </label>
                    </div>
                </div>
                {/* //! button */}
                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15]" />
            </form>
        </div>
    );
};

export default AddCoffee;
