import { Linkbar } from "../Linkbar";
import { Navbar } from "../navbar";
import { ShoppingCart } from "lucide-react";
import { summerCollection } from "../data/data";

export function Lightjackets() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <h1 className="font-inter font-light text-6xl text-black  bg-no-repeat bg-center bg-cover w-[100%] h-[200px]  items-center justify-center relative flex flex-col">
        Light Jackets
        <img
          src="https://i.pinimg.com/564x/c2/a7/0e/c2a70e903b7d4f2b9f44fc60d08d465a.jpg"
          alt=""
          className="w-[100px] h-[140px] absolute right-96 rounded-md"
        />
        <p className="text-xl mt-2">the best jackets you need</p>
        <div className="bg-slate-300 w-[200px] h-[200px] rounded-full right-96 bottom-0 -z-10 absolute"></div>
      </h1>
      <Linkbar />
      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px]">
        {summerCollection.map((clothes) => (
          <div key={clothes.id} className="relative flex font-Inter font-light">
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
