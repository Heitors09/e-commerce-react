import "./App.css";
import { EmblaCarousel } from "./components/Carousel";
import { Descriptions } from "./components/Descriptions";
import { Navbar } from "./components/navbar";
import { Sections } from "./components/Sections";
import { Items } from "./components/Items";

function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Descriptions />
        <Items />
      </div>
    </>
  );
}

export default App;
