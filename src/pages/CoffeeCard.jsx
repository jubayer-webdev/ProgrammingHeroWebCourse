const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee;

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
                        <button className="btn btn-square btn-accent btn-outline">Edit</button>
                        <button className="btn btn-square btn-error btn-outline">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
