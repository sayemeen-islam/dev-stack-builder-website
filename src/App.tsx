import { Suspense } from "react";
import { Banner } from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import { Footer } from "./components/Footer";
import { ToastContainer } from "react-toastify";
import type { ITechnologyType } from "./types/technologies";

const techFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techPromise = techFetch();
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 -mt-5 md:mt-10">
        {" "}
        <h2 className="text-[30px] md:text-[34px] font-extrabold font-inter text-[#0F172A] md:mb-1">
          Explore the{" "}
          <span className="text-gradient-2 text-white">Technologies</span>
        </h2>
        <p className="text-[15px] md:text-[16px] text-[#64748B] mb-5 md:mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <Suspense fallback={<p className=" p-10">Loading technologies...</p>}>
        <Technologies techPromise={techPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
