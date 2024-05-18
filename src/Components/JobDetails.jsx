import { PiCurrencyCircleDollarBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCalendar4Week } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
// React Toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const job = jobs.find(job=> job.id==jobId)
    const {  id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    console.log(job, jobId);
    const handleAppliedJobs = () => {
        saveJobApplication(id)
        toast("You have Applied Successfully")
    };
    return (
        <div className="space-y-10 my-10">
            <h2 className="text-center text-4xl font-bold">Job Details of id: {id}</h2>
            <div className="grid gap-4 md:grid-cols-5">
                <div className="bg-gradient-to-r from-[#7e8ffe28] to-[#9873ff27] border md:col-span-3 p-6 space-y-5">
                    <h2> <span className="text-lg font-bold">Job Description:</span> {job_description}</h2>
                    <h2> <span className="text-lg font-bold">Job Responsibility:</span> {job_responsibility}</h2>
                    <h2> <span className="text-lg font-bold">Educational Requirements:</span> <br></br> {educational_requirements}</h2>
                    <h2> <span className="text-lg font-bold">Experiences:</span> <br></br> {experiences}</h2>
                </div>
                <div className="md:col-span-2 flex flex-col space-y-6">
                    <div className="bg-gradient-to-r w-full from-[#7e8ffe27] to-[#9873ff23] border rounded-md p-6 space-y-2">
                        <h1 className="text-center text-xl font-bold">Job Details</h1>
                        <h1 className="flex items-center space-x-2"> <PiCurrencyCircleDollarBold /> <p className="text-lg font-bold"> Salary: </p><p>{salary}</p></h1>
                        <h1 className="flex items-center space-x-2"> <BsCalendar4Week /> <span className="text-lg font-bold">Job Title:</span> <p>{job_title}</p></h1>
                        <h1 className="text-center text-4xl font-bold">Contact Information</h1>
                        <hr />
                        <h1 className="flex items-center space-x-2"><p><FiPhone /></p> <span className="text-lg font-bold">Phone:</span> {contact_information.phone}</h1>
                        <h1 className="flex items-center space-x-2"> <AiTwotoneMail /> <span className="text-lg font-bold">Email:</span> {contact_information.email}</h1>
                        <p className="flex">
                            <p className="flex"><p className="text-xl mt-1"><CiLocationOn /></p> <p className="text-lg font-bold">Eddress: {contact_information.address}</p></p>
                            <p></p>
                        </p>
                    </div>
                    <div>
                        <button onClick={handleAppliedJobs} className="btn w-full bg-gradient-to-r from-[#7e8ffe73] to-[#9873FF] text-white">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Bounce
            />
        </div>
    );
};

export default JobDetails;