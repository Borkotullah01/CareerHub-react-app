import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div>
            <h1 className="text-5xl text-center font-bold">Featured Jobs {jobs.length}</h1>
            <p className="text-[#757575] text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-6 justify-center items-center grid-cols-1 md:grid-cols-2">
                {
                    jobs.slice(0, dataLength).map(job=> <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
            <div className={dataLength===jobs.length ? 'hidden': 'grid justify-center my-6'}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;