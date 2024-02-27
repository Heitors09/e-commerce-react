import { EmblaCarousel } from "./Carousel";
import { DressCarousel } from "./DressCarousel";
import { Sections } from "./Sections";
import { Items } from "./Items";
import { Newsletter } from "./Newsletter";
import { Contacts } from "./Contacts";
import { Outlet } from "react-router-dom";

export function Index() {
  return (
    <>
      <h2 className="bg-slate-900 font-Inter font-light text-white flex justify-center">
        DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
      </h2>
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
