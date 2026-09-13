import BannerImg from "../assets/banner-stack.png";

export function Banner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center lg:items-start lg:text-start  max-w-xl h-auto space-y-5 lg:space-y-7 mt-18">
        <h1 className="text-[#0F172A] font-extrabold text-5xl md:text-6xl font-inter leading-14 lg:leading-16">
          Build Your Ideal{" "}
          <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="text-[18px] leading-7 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-3 mt-8 lg:mt-14">
          <button className="btn rounded-lg btn-gradient text-white font-inter hover:shadow-md hover:border-purple-500">
            Explore Technologies
          </button>
          <button className="btn btn-outline border-[#E5E7EB] text-[#374151] rounded-lg  px-13 font-inter">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img className="max-full w-200 lg:w-full h-auto" src={BannerImg} alt="Banner-img" />
      </div>
    </div>
  );
}
