import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = (propAny) => {
    console.log(propAny);

    const { coffee, coffees, setCoffees } = propAny;
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = (id) => {
        console.log(id);

        // https://sweetalert2.github.io/#examples
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success",
                // });
                //!------------------- customize start --------------
                // https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DeletE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                            });
                            //! to show remaining coffee in Home.jsx immediately
                            const remaining = coffees.filter((coffee) => coffee._id !== id);
                            setCoffees(remaining);
                        }
                    });
                //!------------------- customize end ----------------
            }
        });
    };

    return (
        <div className="card card-side shadow-xl bg-[#F5F4F1]">
            <figure>
                <img src={photo} alt="Coffee" />
            </figure>
            <div className="w-full flex justify-between p-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    {/* https://daisyui.com/components/join/ */}
                    <div className="join join-vertical space-y-3">
                        <button className="btn btn-square btn-info  btn-outline">View</button>

                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn btn-square btn-accent btn-outline">Edit</button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-error btn-outline">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
