const AddCoffee = () => {
    return (
        <div>
            <h2>Add a Coffee</h2>

            <form>
                <div className="flex ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label>
                            <input className="input input-bordered" type="text" placeholder="Coffee Name" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label>
                            <input className="input input-bordered" type="text" placeholder="Available Quantity" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
