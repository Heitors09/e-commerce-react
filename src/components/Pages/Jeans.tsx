import { jeansCollection } from "../data/data";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";

export function Jeans() {
  const provider = useContext(ItemsContext);
  console.log(provider?.cartItems);

  return (
    <motion.div
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      className="flex flex-col items-center"
    >
      <h1 className="font-inter font-light text-6xl text-black  bg-no-repeat bg-center bg-cover w-[100%] h-[200px]  items-center justify-center relative flex flex-col">
        Jeans
        <img
          src="https://i.pinimg.com/564x/9c/a9/13/9ca913d9d1ce2ecf1e6cc25214f0abec.jpg"
          alt=""
          className="w-[100px] h-[140px] absolute right-96 rounded-md"
        />
        <p className="text-xl mt-2">the best jeans you need</p>
        <div className="bg-blue-200 w-[200px] h-[200px] rounded-full right-96  -z-10 absolute"></div>
      </h1>

      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px]">
        {jeansCollection.map((clothes) => (
          <div
            key={clothes.id}
            className=" flex flex-col font-Inter font-light group mt-4"
          >
            <img
              src={clothes.url}
              className="w-[300px] h-[400px] duration-150 hover:scale-105 mb-2 rounded-md"
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
  );
}
