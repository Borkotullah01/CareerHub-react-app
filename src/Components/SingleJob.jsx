import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SingleJob = ({job}) => {
    console.log(job)
    const {  id, company_name, logo, job_title, job_type, remote_or_onsite, location, salary, } = job;
    return (
        <div className="border-2 border-[dodgerBlue] rounded-md p-8 space-y-3">
            <img src={logo} alt="" />
            <h1 className="text-[24px] font-bold">{job_title}</h1>
            <h2 className="text-[#757575]">{company_name}</h2>
            <div className="flex gap-2">
                <button className="btn btn-info text-white">{remote_or_onsite}</button>
                <button className="btn btn-success text-white">{job_type}</button>
            </div>
            <div className="flex gap-5">
                <p className="flex gap-1 items-center"><CiLocationOn />{location}</p>
                <p className="flex gap-1 items-center"><RiMoneyDollarCircleLine /> Salary: {salary}</p>
            </div>
            <div>
            <Link to={`/job/${id}`}><button className="btn">View Details</button></Link>
            </div>
            
        </div>
    );
};

export default SingleJob;