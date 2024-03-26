import { useLoaderData, useParams } from "react-router-dom";
//!https://fkhadra.github.io/react-toastify/installation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    console.log("in JobDetails id = ", id);
    console.log(jobs);
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    console.log(job);

    const handleToast = () => {
        const isAdd = saveJobApplication(idInt);
        if (isAdd) toast("You have applied successfully");
        //!https://fkhadra.github.io/react-toastify/positioning-toast
        else {
            toast.warn("Warning Notification !", {
                position: "top-right",
                //!https://fkhadra.github.io/react-toastify/autoClose
                autoClose: 1000,
            });
        }
    };

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                {/*//!right side */}
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleToast} className="btn btn-primary w-full">
                        Apply Now
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;
