
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/src/assets/images/user.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">One Step <br></br> Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
              <p className="py-6 text-[#757575]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default Hero;