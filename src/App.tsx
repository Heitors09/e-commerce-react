import "./App.css";
import { EmblaCarousel } from "./components/Carousel";
import { Descriptions } from "./components/Descriptions";
import { Navbar } from "./components/navbar";
import { Sections } from "./components/Sections";
import { Items } from "./components/Items";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Descriptions />
        <Items />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
