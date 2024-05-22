import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";

const AddRoom = () => {
    const { user } = useAuth();
    //! https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState("Upload Image");

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selectionKEY",
    });

    //! Date range handler
    const handleDates = (item) => {
        setDates(item.selectionKEY);
        console.log("Date range in AddRooms item =", item);
    };

    //!   Form handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // setLoading(true);
        const form = e.target;

        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];

        //! owner of the house who give the room
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        };

        try {
            //! image
            const image_url = await imageUpload(image);
            console.log("image_url =", image_url);

            const roomData = {
                location,
                category,
                title,
                to,
                from,
                price,
                guests,
                bathrooms,
                bedrooms,
                host,
                description,
                image: image_url,
            };
            console.table(roomData);

            //!   Post request to server
        } catch (err) {
            console.log(err);
        }
    };

    //!  handle image change
    const handleImage = (image) => {
        setImagePreview(URL.createObjectURL(image));
        setImageText(image.name);
    };

    return (
        <AddRoomForm
            //
            dates={dates}
            handleDates={handleDates}
            handleSubmit={handleSubmit}
            setImagePreview={setImagePreview}
            imagePreview={imagePreview}
            handleImage={handleImage}
            imageText={imageText}
        />
    );
};

export default AddRoom;
