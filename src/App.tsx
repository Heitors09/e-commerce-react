import "./App.css";
import { EmblaCarousel } from "./components/Carousel";
import { DressCarousel } from "./components/DressCarousel";
import { Navbar } from "./components/navbar";
import { Sections } from "./components/Sections";
import { Items } from "./components/Items";
import { Newsletter } from "./components/Newsletter";
import { Linkbar } from "./components/Linkbar";

function App() {
  return (
    <>
      <h2 className="bg-slate-900 font-Inter font-light text-white flex justify-center">
        DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
      </h2>
      <Navbar />
      <Linkbar />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Items />
        <h1 className="w-[90%] text-white h-72 bg-banner bg-center mt-12 font-Inter font-light text-6xl pt-14 pl-[135px]">
          Promotions
        </h1>
        <DressCarousel />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
