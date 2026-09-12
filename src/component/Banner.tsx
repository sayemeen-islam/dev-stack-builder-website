import BannerImg from "../assets/banner-stack.png";

export function Banner() {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
      <div className="max-w-xl h-auto space-y-7">
        <h1 className="text-[#0F172A] font-extrabold text-6xl font-inter leading-16">
          Build Your Ideal <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="text-[18px] leading-7 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-3 mt-14">
          <button className="btn rounded-lg btn-gradient font-inter hover:shadow-md hover:border-purple-500">
            Explore Technologies
          </button>
          <button className="btn btn-outline border-[#E5E7EB] text-[#374151] rounded-lg  px-13 font-inter">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img className="w-full h-auto" src={BannerImg} alt="Banner-img" />
      </div>
    </div>
  );
}
