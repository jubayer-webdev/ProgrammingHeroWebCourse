//!https://fkhadra.github.io/react-toastify/installation
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    console.log('storedJobApplication = ', storedJobApplication);
    console.log('JSON.parse(storedJobApplication) = ', JSON.parse(storedJobApplication));
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    //!checking duplicate
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
        return true;
    }
    return false;
    // else {
    //     toast.warn("Warning Notification !", {
    //         position: "bottom-left"
    //     });
    //     console.log('jame');
    // }
    //  <ToastContainer />
}
export { saveJobApplication, getStoredJobApplication }


/* //! Debug
const arr = ["John", 3, "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON);

const a = JSON.parse(myJSON);
console.log(a);

console.log(typeof (myJSON));
console.log(typeof (a));
*/
