import { Suspense } from "react";
import { Banner } from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import type { ITechnologyType } from "./types/type";
import { Footer } from "./components/Footer";

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
      <div className="w-full max-w-7xl mx-auto mt-2">
        {" "}
        <h2 className="text-[34px] font-extrabold font-inter text-[#0F172A] mb-1">
          Explore the{" "}
          <span className="text-gradient-2 text-white">Technologies</span>
        </h2>
        <p className="text-[#64748B] mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <Suspense
        fallback={<p className=" p-10">Loading technologies...</p>}
      >
        <Technologies techPromise={techPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
