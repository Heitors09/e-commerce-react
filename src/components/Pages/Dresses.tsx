import { ShoppingCart } from "lucide-react";
import { dressesCollection } from "../data/data";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";

export function Dresses() {
  const provider = useContext(ItemsContext);
  console.log(provider?.cartItems);

  return (
    <motion.div
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      className="flex flex-col items-center"
    >
      <h1 className="font-inter font-light text-6xl text-black  bg-no-repeat bg-center bg-cover w-[100%] h-[200px]  items-center justify-center relative flex flex-col">
        Dresses
        <img
          src="https://i.pinimg.com/564x/9b/3e/55/9b3e5576edf9e22e57f6d7229055d235.jpg"
          alt=""
          className="w-[100px] h-[140px] absolute right-96 rounded-md"
        />
        <p className="text-xl mt-2">the best dresses you need</p>
        <div className="bg-pink-200 w-[200px] h-[200px] rounded-full right-96 bottom-0 -z-10 absolute"></div>
      </h1>

      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px]">
        {dressesCollection.map((clothes) => (
          <div
            key={clothes.id}
            className="relative flex font-Inter font-light mt-2"
          >
            <img
              src={clothes.url}
              className="w-[300px] h-[400px] duration-150 hover:scale-105"
            />

            <button
              onClick={() => provider?.addItem(clothes.id)}
              className="absolute bottom-10 left-5 h-12 w-auto p-2 flex gap-1 text-xl ring-1 ring-black rounded-full items-center justify-center hover:scale-110 duration-150"
            >
              <ShoppingCart className="size-5" />
              <footer className=" rounded-full h-9 p-1 ">
                ${clothes.price}
              </footer>
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
