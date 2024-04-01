import { dressesCollection } from "../data/data";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { useScrollReset } from "../hooks/useScrollReset";
import { Toaster } from "sonner";

export function Dresses() {
  const provider = useContext(ItemsContext);
  useScrollReset();

  return (
    <>
      <motion.div
        initial={{ x: "90%" }}
        animate={{ x: 0 }}
        className="flex flex-col items-center"
      >
        <h1 className="mt-[50px]  font-inter font-light text-6xl text-black  bg-no-repeat bg-center bg-cover w-[100%] h-[200px]  items-center justify-center relative flex flex-col">
          Dresses
          <img
            src="https://i.pinimg.com/564x/9b/3e/55/9b3e5576edf9e22e57f6d7229055d235.jpg"
            alt=""
            className="w-[100px] h-[140px] absolute right-96 rounded-md"
          />
          <p className="text-xl mt-2">the best dresses you need</p>
          <div className="bg-pink-200 w-[200px] h-[200px] rounded-full right-96 bottom-0 -z-10 absolute"></div>
        </h1>

        <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px] mb-14">
          {dressesCollection.map((clothes) => (
            <div
              key={clothes.id}
              className=" flex flex-col font-Inter font-light group mt-4"
            >
              <img
                src={clothes.url}
                className="w-[300px] h-[400px] duration-150 hover:scale-105 mb-2 rounded-md"
                onClick={() => provider.goToItemPage(clothes.id)}
              />
              <p>{clothes.Name}</p>
              <div className="flex justify-between">
                <footer className="  text-xl p-1">${clothes.price}</footer>
                <button
                  className="w-12 text-white bg-black "
                  onClick={() => provider?.addItem(clothes.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="w-full h-12 bg-transparent fixed bottom-0">
        <Toaster />
      </div>
    </>
  );
}
