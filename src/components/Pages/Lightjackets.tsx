import { ShoppingCart } from "lucide-react";
import { jacketsCollection } from "../data/data";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";

export function Lightjackets() {
  const provider = useContext(ItemsContext);
  console.log(provider?.cartItems);

  return (
    <motion.div
      initial={{ x: "90%" }}
      animate={{ x: 0 }}
      className="flex flex-col items-center"
    >
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

      <div className="flex gap-5 items-center justify-center cursor-pointer flex-wrap w-[1000px] mb-4">
        {jacketsCollection.map((jacket) => (
          <div key={jacket.id} className="relative flex font-Inter font-light">
            <img
              src={jacket.url}
              className="w-[300px] h-[400px] mt-2 duration-150 hover:scale-105"
            />

            <button
              onClick={() => provider?.addItem(jacket.id)}
              className="absolute bottom-10 left-5 h-12 w-auto p-2 flex gap-1 text-xl ring-1 ring-black rounded-full items-center justify-center hover:scale-110 duration-150"
            >
              <ShoppingCart className="size-5" />
              <footer className=" rounded-full h-9 p-1 ">
                ${jacket.price}
              </footer>
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
