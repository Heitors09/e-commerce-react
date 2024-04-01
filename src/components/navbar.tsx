import { Search } from "lucide-react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2Icon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useContext, useState, ChangeEvent } from "react";
import { ItemsContext } from "./Context/ProviderItem";
import { clothesCollection } from "./data/data";
import googleIcon from "./assets/google-icon.svg";

//interface Item {
//Name: string;
//id: string;
//url: string;
//price: number;
//promotion?: boolean;
//}

//interface Collection {
//name: string;
//items: Item[];
//}

export function Navbar() {
  const provider = useContext(ItemsContext);
  const cartItems = provider?.cartItems || [];
  const navigate = useNavigate();
  const user = provider?.user;
  const [searchItem, setSearchItem] = useState("");
  const [resultItems, setResultItems] = useState([]);

  function handleTypeSearch(event: ChangeEvent<HTMLTextAreaElement>) {
    //tipagem do event com "ChangeEvent e especificando o elemento html em questão"
    const searchType = event.target.value;
    setSearchItem(searchType);
    //seta o valor de serachItem com a variável searchType que vai receber o target.value  do evet
    const searchResults = [];
    //cria um array vazio
    //itera com a variável collection entre todas as coleções e desestrutura apenas a chave items de cada
    for (const collection of clothesCollection) {
      const { items } = collection;
      const resultInCollection = items.filter(
        (item) => item.Name.toLowerCase().includes(searchType.toLowerCase())
        //realiza um filter em items onde item.Name e colocado em letras minúsculas(case insensetive)
        //dessa maneira com o includes() eu pesquiso em items de cada collection se cada caractere digitado
        //está incluido em alguma string do array
        //devolve o valor true e cria
      );
      searchResults.push(...resultInCollection);
      //realiza um push desse array para meu array vázio
    }
    setResultItems(searchResults);
    //seta a state variable com o valor do meu novo array
  }

  function handleGoToCart() {
    navigate("/checkout");
  }

  return (
    <div
      className="
    drop-shadow-md w-[100%] sticky top-0 z-30 bg-white h-[75px] 2xl:px-4 2xl:justify-between xl:gap-72 gap-64 flex items-center font-light justify-center"
    >
      <div className="flex items-center gap-3 relative">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="hover:cursor-pointer outline-none p-2  hover:bg-white rounded-full hover:opacity-85  group duration-150">
              <HamburgerMenuIcon className="text-slate-900 size-5  group-hover:text-slate-900" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content
              className="fixed top-20 left-5
             z-40 bg-white drop-shadow-md font-Inter font-light outline-none  w-[200px] rounded-md h-auto flex flex-col gap-5 p-2 "
            >
              <ul>
                <li className="outline-none hover:bg-stone-200 hover:rounded-md duration-150 rounded-md hover:cursor-pointer">
                  <button className="p-2">Categories</button>
                </li>
                <li className="outline-none hover:bg-stone-200 hover:rounded-md duration-150  hover:cursor-pointer">
                  <button className="p-2">Releases</button>
                </li>
                <li className="outline-none hover:bg-stone-200 hover:rounded-md duration-150 hover:cursor-pointer">
                  <button className="p-2">Login</button>
                </li>
                <li className="outline-none hover:bg-stone-200 hover:rounded-md duration-150  hover:cursor-pointer">
                  <button className="p-2">Promotions</button>
                </li>
              </ul>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <div className="flex items-center relative">
          <textarea
            className=" p-2 rounded-l-lg h-[34px] bg-transparent resize-none outline-none  bg-white border-solid border-bottom-2  ring-black font-Inter font-light overflow-hidden text-nowrap ring-1"
            placeholder="Search"
            onChange={handleTypeSearch}
            value={searchItem}
          ></textarea>
          <ul className="absolute gap-1 top-9  flex flex-col bg-white  rounded-md   w-[250px] h-auto">
            {resultItems && searchItem ? (
              resultItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/"
                    className="drop-shadow-md h-12  flex items-center gap-2 w-full duration-20it0 hover:bg-stone-200 rounded-md"
                  >
                    <img src={item.url} className="size-12 rounded-l-md" />
                    <p>{item.Name}</p>
                  </Link>
                </li>
              ))
            ) : (
              <li></li>
            )}
          </ul>
          <button className=" size-[35px] xl:size-[36px]  rounded-r-lg bg-black p-2">
            <Search className="text-white size-5" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 text-slate-900 font-Inter">
        <Link to="/" className="text-xl">
          VIBRA.
        </Link>
      </div>
      <div className="font-Inter text-slate-900  flex gap-5">
        {user ? (
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">welcome, {user.name}</p>
            <img className="rounded-full size-7" src={user.avatar} />
          </div>
        ) : (
          <button
            onClick={provider?.authGoogle}
            className="bg-red-500 h-[30px] w-[213px] text-white font-bold text-sm flex items-center gap-2 p-5 hover:opacity-90 rounded-md"
          >
            <img className="size-5" src={googleIcon} />{" "}
            <span>Log in with Google</span>
          </button>
        )}

        <Dialog.Root>
          <Dialog.Trigger className="relative">
            <ShoppingCart className="text-slate-900 size-9" />
            {cartItems.length > 0 ? (
              <div className="bg-red-500 size-5 rounded-full bottom-0  absolute duration-150 flex  justify-center">
                <p className="text-sm text-white">{cartItems.length}</p>
              </div>
            ) : (
              <div className="bg-transparent size-3 bottom-0 rounded-full absolute duration-150" />
            )}
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content>
              <motion.div
                initial={{ x: "90%" }}
                animate={{ x: 0 }}
                className="fixed z-30 top-0 right-0 h-full rounded-md w-[300px] bg-slate-100 overflow-y-auto"
              >
                <div className="relative">
                  <Dialog.Trigger>
                    <X className="m-3" />
                  </Dialog.Trigger>
                  {cartItems?.map((item) => (
                    <div
                      key={item.id}
                      className="m-auto bg-white ring-black ring-1 w-[90%] rounded-md hover:bg-stone-100 hover:cursor-pointer  h-[130px] flex mb-2  items-center gap-3  font-Inter  mt-5 px-5"
                    >
                      <img
                        className="w-[50%] h-[60%] rounded-md hover:-translate-y-1 duration-200 "
                        src={item.url}
                        onClick={() => provider.goToItemPage(item.id)}
                      ></img>
                      <div className="flex flex-col gap-1  justify-center">
                        <h3
                          className="text-sm font-bold hover:text-gray-500"
                          onClick={() => provider.goToItemPage(item.id)}
                        >
                          {item.Name}
                        </h3>
                        <h3 className=" font-bold">${item.price},00</h3>
                        <div className="font-medium text-sm flex gap-1 items-center">
                          <h3>amount:</h3>
                          <p className="ring-1 ring-green-400 rounded-full size-5 pl-1.5">
                            {item.quantity}
                          </p>
                          <button
                            onClick={() => provider?.deleteItem(item.id)}
                            className="hover:text-red-500 duration-150  "
                          >
                            <Trash2Icon className="size-5 ml-12" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cartItems.length > 0 ? (
                    <div className="sticky bottom-0 w-full h-[100px] gap-2  flex flex-col  items-center justify-center bg-white">
                      <div className="flex items-center gap-1 ">
                        <h2 className="font-medium font-Inter ">Total: </h2>
                        <h3 className=" flex items-center justify-center font-bold ">
                          ${provider?.totalPrice},00
                        </h3>
                      </div>
                      <button
                        className="bg-black hover:bg-green-500 duration-200 rounded-full w-[150px] text-white p-2 font-bold"
                        onClick={handleGoToCart}
                      >
                        Buy
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center mt-[170px] text-stone-400">
                      <ShoppingCart />
                      <p className="font-medium text-sm text-stone-400">
                        add a new item to the cart
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
