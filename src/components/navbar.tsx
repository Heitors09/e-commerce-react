import { Search } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ItemsContext } from "./Context/ProviderItem";
import { clothesCollection } from "./data/data";

interface Item {
  Name: string;
  id: string;
  url: string;
  price: number;
  promotion?: boolean;
}

interface Collection {
  name: string;
  items: Item[];
}

export function Navbar() {
  const provider = useContext(ItemsContext);
  const cartItems = provider?.cartItems || {};
  const itemIds = Object.keys(cartItems);

  function findItemById(collections: Collection[], itemIds: string[]) {
    const foundItems: Item[] = [];
    //foundItems espera conter elementos que correspondam a estrutura definida em interface Item
    //"=[]" define o valor inicial para uma Array vazia
    for (const collection of collections) {
      //itera entre(collection = objeto da coleção) cada coleção dentro do recebido de collections
      const { items } = collection;
      //desestrutura acessando apenas "items" de cada objeto collection
      for (const itemId of itemIds) {
        //cria uma variavel que itera entre cada itemIds recebido
        const foundItem = items.find((item: Item) => item.id === itemId);
        //realiza um find para cada itemId dentro de itemIds comparando com item.id
        //dos itens da minha coleção e atribui em uma váriavel
        if (foundItem) {
          foundItems.push(foundItem);
          //afinal se foundItem for true e encontrar passa cada item "foundItem"
          //com um push para foundItems que espera um inerface Item[]
        }
      }
    }
    return foundItems;
  }

  const itemsToBuy = findItemById(clothesCollection, itemIds);
  console.log(itemsToBuy);

  return (
    <div className="w-[100%] bg-white h-[75px]  flex gap-5 p-5 items-center justify-between font-light drop-shadow-md">
      <div className="flex items-center gap-3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="hover:cursor-pointer outline-none p-2  hover:bg-white rounded-full hover:opacity-85  group duration-150">
              <HamburgerMenuIcon className="text-slate-900 size-5  group-hover:text-slate-900" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white rounded-md drop-shadow-md font-Inter font-light outline-none ml-3 w-[200px] h-[100%] flex flex-col gap-5 p-2 "
              sideOffset={2}
            >
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Categories</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Releases</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Login</button>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="outline-none hover:bg-slate-900 hover:rounded-md duration-150 hover:text-white hover:cursor-pointer">
                <button className="p-2">Promotions</button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <div className="flex">
          <textarea
            className="p-2 rounded-l-lg h-10 bg-transparent resize-none outline-none pt-2 bg-white border-solid border-bottom-2  border-slate-900 font-Inter font-light overflow-hidden text-nowrap ring-1"
            placeholder="Search"
          ></textarea>
          <button className=" h-10 w-9 rounded-r-lg bg-slate-900 p-2">
            <Search className="text-white size-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 text-slate-900 font-Inter mr-[120px]">
        <Link to="/" className="text-xl">
          VIBRA.
        </Link>
      </div>
      <div className="font-Inter text-slate-900  flex gap-5">
        <a href="">Register</a>
        <a href="">Login</a>
        <Dialog.Root>
          <Dialog.Trigger>
            <ShoppingCart className="text-slate-900" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content>
              <motion.div
                initial={{ x: "90%" }}
                animate={{ x: 0 }}
                className="absolute top-0 right-0 h-full rounded-md w-[300px] bg-slate-900 overflow-y-auto"
              >
                <div className="relative">
                  <Dialog.Trigger>
                    <X className="text-white m-3" />
                  </Dialog.Trigger>
                  {itemsToBuy.map((item) => (
                    <div
                      key={item.id}
                      className="m-auto bg-slate-700 ring-sky-200 ring-2 w-[90%] rounded-md h-auto max-h-[150px] flex mb-1  items-center gap-2  font-Inter text-white mt-5"
                    >
                      <img className="w-[30%] rounded-md" src={item.url}></img>
                      <div className="flex flex-col gap-3  justify-center">
                        <h2>{item.Name}</h2>
                        <h3>${item.price}</h3>
                      </div>
                    </div>
                  ))}
                  <div className="w-full h-20  flex flex-col gap-2 items-center justify-center bg-slate-800 text-white">
                    <div className="flex gap-3">
                      <h2 className="font-medium font-Inter ">Total:</h2>
                      <p>$</p>
                    </div>
                    <button className="bg-white rounded-full w-20 text-slate-800">
                      Buy
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
