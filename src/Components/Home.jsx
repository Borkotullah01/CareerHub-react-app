import CategoryList from "./CategoryList";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl text-center font-bold">This is home page</h1>
            <Hero></Hero>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;