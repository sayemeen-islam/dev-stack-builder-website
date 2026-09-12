import { Suspense } from "react";
import { Banner } from "./component/Banner";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";
import type { ITechnologyType } from "./types/type";

const techFetch = async ():Promise<ITechnologyType[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techPromise=techFetch()
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading technologies...</p>}><Technologies techPromise={techPromise}></Technologies></Suspense>
    </>
  );
}

export default App;
