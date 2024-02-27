import { summerCollection } from "../data/data";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";

export function Summer() {
  const provider = useContext(ItemsContext);
  console.log(provider?.cartItems);

  return (
    <motion.div
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      className="flex flex-col items-center"
    >
      <h1 className="font-inter font-light text-6xl text-black  bg-no-repeat bg-center bg-cover w-[100%] h-[200px] items-center justify-center relative flex flex-col">
        Summer Sale
        <div className="bg-yellow-200 w-[200px] h-[200px] rounded-full right-80 -z-10 absolute"></div>
        <p className="text-xl">the best summer collection</p>
        <img
          src="https://i.pinimg.com/564x/a7/1e/64/a71e64ebc036a79f11714c1f34afe79f.jpg"
          alt=""
          className="w-[100px] h-[140px] absolute right-80 rounded-md"
        />
      </h1>

      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px]">
        {summerCollection.map((clothes) => (
          <div
            key={clothes.id}
            className="relative flex font-Inter font-light group mt-4"
          >
            <img
              src={clothes.url}
              className="w-[300px] h-[400px] duration-150 hover:scale-105 mb-5 rounded-md"
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
