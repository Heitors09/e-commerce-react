import { EmblaCarousel } from "./Carousel";
import { DressCarousel } from "./DressCarousel";
import { Sections } from "./Sections";
import { Items } from "./Items";
import { Newsletter } from "./Newsletter";
import { Contacts } from "./Contacts";
import { Outlet } from "react-router-dom";
import { useScrollReset } from "./hooks/useScrollReset";

export function Index() {
  useScrollReset();

  return (
    <>
      <Outlet />
      <EmblaCarousel />
      <div className="flex flex-col items-center">
        <Sections />
        <Items />
        <h1 className=" text-black mt-12 mb-5  font-Inter font-light text-6xl">
          Promotions
        </h1>
        <DressCarousel />
        <Newsletter />
        <Contacts />
      </div>
    </>
  );
}
