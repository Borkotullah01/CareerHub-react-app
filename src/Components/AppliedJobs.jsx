import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobsFilter = filter =>{
        if (filter) {
            if (filter === 'all') {
                setDisplayJobs(appliedJobs)
            }
            else if(filter === 'remote'){
                const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote');
                setDisplayJobs(remoteJobs);
            }
            else if(filter === 'onsite'){
                const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite');
                setDisplayJobs(onsiteJobs);
            }
        }
    }
    useEffect(()=>{
        const storedJobId = getStoredJobApplication();
        if(jobs.length > 0){
            // const JobsApplied = jobs.filter(job=> storedJobId.includes(job.id))
            const JobsApplied = [];
            for(const id of storedJobId){
                const job = jobs.find(job=>job.id=== id);
                if(job){
                    JobsApplied.push(job)
                }
            }
            setAppliedJobs(JobsApplied);
            setDisplayJobs(JobsApplied)
            // console.log( storedJobId );
        }
    },[jobs])
    return (
        <div>
            <h1>Jobs I applied: {appliedJobs.length}</h1>
            <details className="dropdown">
              <summary className="m-1 btn">open or close</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
              </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job=> <li key={job.id}> <span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span> </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;