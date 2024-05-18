import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="grid justify-center text-primary">
            <h1 className="text-center text-5xl font-bold">404 Error. Page Not Found</h1>
            <div className="text-center mt-6">
            <Link to={-1}><button className="btn btn-secondary">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;