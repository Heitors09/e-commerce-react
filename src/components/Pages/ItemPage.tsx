import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { CreditCard } from "lucide-react";
import { Plus } from "lucide-react";
import { Heart } from "lucide-react";
import { useScrollReset } from "../hooks/useScrollReset";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Toaster } from "sonner";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { motion } from "framer-motion";

export function ItemPage() {
  useScrollReset();
  const provider = useContext(ItemsContext);
  const storedItem = JSON.parse(localStorage.getItem("currentItem"));
  const clothesSize = provider.clothesSize;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mt-5">{storedItem.Name}</h2>
      <div className=" w-full h-[400px]  justify-center items-center flex mt-9 mb-5">
        <div className="h-[400px] w-[300px] mr-1">
          <img src={storedItem.url} className="size-[100%] rounded-l-md " />
        </div>
        <aside className="w-[450px] h-[400px] p-1/2 flex px-5 rounded-r-md bg-stone-100 drop-shadow-md">
          <div className="flex flex-col gap-2 mt-5 ">
            <h3 className="flex gap-1 font-bold  text-2xl items-center">
              $ {storedItem.price},00
            </h3>
            <Dialog.Root>
              <Dialog.Trigger className="ring-1 w-40 flex items-center justify-center gap-1 text-sm font-light ring-black">
                <Plus className="size-3" />
                <p className="font-medium">payment methods</p>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Content className="absolute top-[35%] left-[35%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "tween" }}
                    className="h-[300px] w-[400px] bg-stone-100 rounded-md overflow-hidden"
                  >
                    <div className="flex items-center justify-between px-5 py-2">
                      <p className="font-medium text-lg ">Payment methods</p>
                      <Dialog.Trigger>
                        <X className="size-7 text-stone-300" />
                      </Dialog.Trigger>
                    </div>
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <div className="w-80 ring-1 bg-white ring-stone-200 h-12 rounded-md flex items-center px-5 justify-between">
                        <p className="font-medium text-sm">
                          $ {storedItem.price},00
                        </p>
                      </div>
                      <div className="w-80 ring-1 bg-white ring-stone-200 h-12 rounded-md flex items-center px-5 justify-between">
                        <p className="flex gap-1">
                          <CreditCard />{" "}
                          <span className="font-medium">Credit Card</span>
                        </p>
                        <p className="font-medium text-sm">
                          $ {storedItem.price},00
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <p className="font-light">size:</p>
            <div className="flex gap-2 font-light">
              <button
                onClick={() => provider.defineClothesSize("S")}
                className="ring-1 ring-gray-400  focus:ring-[#126edb] focus:ring-2 focus:font-medium focus:text-[#126edb] rounded-md h-9 w-8"
              >
                S
              </button>
              <button
                onClick={() => provider.defineClothesSize("M")}
                className="ring-1 ring-gray-400  focus:ring-[#126edb] focus:ring-2 focus:font-medium focus:text-[#126edb] rounded-md h-9 w-8"
              >
                M
              </button>
              <button
                onClick={() => provider.defineClothesSize("L")}
                className="ring-1 ring-gray-400  focus:ring-[#126edb] focus:ring-2 focus:font-medium focus:text-[#126edb] rounded-md h-9 w-8"
              >
                L
              </button>
              <button
                onClick={() => provider.defineClothesSize("XL")}
                className="ring-1 ring-gray-400  focus:ring-[#126edb] focus:ring-2 focus:font-medium focus:text-[#126edb] rounded-md h-9 w-8"
              >
                XL
              </button>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => provider.addItem(storedItem.id, clothesSize)}
                className="w-[300px] text-xl h-[40px] bg-[#126edb] shadow-[0_4px_8px_rgba(0,0,0,0.2)]  hover:brightness-90 duration-150 text-white font-bold rounded-md"
              >
                Buy
              </button>
            </div>
            <a
              className="text-sm mt-9 flex items-center gap-1 underline"
              href="#"
            >
              <Plus className="size-4" /> <p>see more similar products</p>
            </a>
            <a className="text-sm  flex items-center gap-1 mt-1" href="#">
              <Heart className="size-4 text-red-500" /> <p>add to favorites</p>
            </a>
            <a className="text-sm  flex items-center  gap-1 mt-1" href="#">
              <HamburgerMenuIcon className="size-4" /> <p>description</p>
            </a>
          </div>
        </aside>
      </div>
      <div className="w-full h-12 bg-transparent fixed bottom-0">
        <Toaster />
      </div>
    </div>
  );
}
