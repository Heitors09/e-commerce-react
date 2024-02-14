import "./App.css";
import { EmblaCarousel } from "./components/Carousel";
import { Descriptions } from "./components/Descriptions";
import { Navbar } from "./components/navbar";
import { Sections } from "./components/Sections";

function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Descriptions />
      </div>
    </>
  );
}

export default App;
