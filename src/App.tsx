import "./App.css";
import { Linkbar } from "./components/Linkbar";
import { Navbar } from "./components/navbar";
import { Outlet } from "react-router-dom";
import { ProviderItem } from "./components/Context/ProviderItem";

function App() {
  return (
    <>
      <ProviderItem>
        <Linkbar />
        <Navbar />
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </ProviderItem>
    </>
  );
}

export default App;
