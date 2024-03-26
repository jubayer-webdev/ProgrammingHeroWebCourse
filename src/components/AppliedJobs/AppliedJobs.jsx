import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { list } from "postcss";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            //! Method 1
            // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
            //! Method 2
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find((jobbb) => jobbb.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds,jobsApplied);
        }
    }, []);

    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>

            {/* //!https://daisyui.com/components/dropdown/ */}
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                        <a>All</a>
                    </li>
                    <li>
                        <a>Remote</a>
                    </li>
                    <li>
                        <a>onsite</a>
                    </li>
                </ul>
            </details>

            <ul>
                {appliedJobs.map((job) => (
                    <li key={job.id}>
                        <span>
                            {job.job_title} --😎 {job.company_name}:-- {job.remote_or_onsite}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppliedJobs;
