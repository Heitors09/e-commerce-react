import "./App.css";
import { EmblaCarousel } from "./components/Carousel";
import { Descriptions } from "./components/Descriptions";
import { Navbar } from "./components/navbar";
import { Sections } from "./components/Sections";
import { Items } from "./components/Items";
import { Newsletter } from "./components/Newsletter";
import { Linkbar } from "./components/Linkbar";

function App() {
  return (
    <>
      <h2 className="bg-stone-100 font-Inter font-light text-black flex justify-center">
        DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
      </h2>
      <Navbar />
      <Linkbar />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Descriptions />
        <Items />
        <Newsletter />
      </div>
    </>
  );
}

export default App;
