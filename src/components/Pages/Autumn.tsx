import { Linkbar } from "../Linkbar";
import { Navbar } from "../navbar";
import { autumnCollection } from "../data/data";
import { ShoppingCart } from "lucide-react";

export function Autumn() {
  return (
    <div className="flex flex-col items-center h-auto">
      <Navbar />
      <h1 className="font-inter font-light text-6xl text-white   bg-summer bg-no-repeat bg-center bg-cover w-[100%] h-[200px] flex items-center justify-center">
        Autumn collection
      </h1>
      <Linkbar />
      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px]">
        {autumnCollection.map((clothes) => (
          <div
            key={clothes.id}
            className="relative flex font-Inter font-light mt-4"
          >
            <img
              src={clothes.url}
              className="w-[300px] h-[500px] duration-150 hover:scale-105"
            />

            <button className="absolute bottom-10 left-5 h-12 w-auto p-2 flex gap-1 text-xl ring-1 ring-black rounded-full items-center justify-center hover:scale-110 duration-150">
              <ShoppingCart className="size-5" />
              <footer className=" rounded-full h-9 p-1 ">
                ${clothes.price}
              </footer>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
