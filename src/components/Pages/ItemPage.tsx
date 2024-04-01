import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { Wallet } from "lucide-react";
import { Plus } from "lucide-react";
import { Heart } from "lucide-react";
import { useScrollReset } from "../hooks/useScrollReset";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Toaster } from "sonner";

export function ItemPage() {
  useScrollReset();
  const provider = useContext(ItemsContext);
  const storedItem = JSON.parse(localStorage.getItem("currentItem"));
  const cartItems = provider.cartItems;

  function findItemQuantity() {
    const foundItem = cartItems.find((item) => item.id === storedItem.id);

    if (foundItem && foundItem.quantity !== undefined) {
      return foundItem.quantity;
    }

    return 0;
  }

  const itemQuantity = findItemQuantity();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mt-5">{storedItem.Name}</h2>
      <div className=" w-full h-[400px]  justify-center items-center flex mt-9 mb-5">
        <div className="h-[400px] w-[300px] mr-1">
          <img src={storedItem.url} className="size-[100%] rounded-l-md " />
        </div>
        <aside className=" w-[450px] h-[400px] p-1/2 flex px-5 rounded-r-md bg-stone-100 drop-shadow-md">
          <div className="flex flex-col gap-2 mt-5">
            <h3 className="flex gap-1 font-bold  text-xl items-start">
              <span className="flex text-black">
                <Wallet />
              </span>
              $ {storedItem.price},00
            </h3>
            <p className="font-light mt-7">size:</p>
            <div className="flex gap-2 font-light">
              <button className="ring-1 ring-gray-400 hover:ring-black hover:font-medium rounded-md h-9 w-8">
                P
              </button>
              <button className="ring-1 ring-gray-400 hover:ring-black hover:font-medium rounded-md h-9 w-8">
                M
              </button>
              <button className="ring-1 ring-gray-400 hover:ring-black hover:font-medium rounded-md h-9 w-8">
                G
              </button>
              <button className="ring-1 ring-gray-400 hover:ring-black hover:font-medium rounded-md h-9 w-8">
                GG
              </button>
            </div>
            <div className="flex items-center gap-3 mt-5">
              {itemQuantity ? (
                <div className="flex gap-3 ring-1 p-2 rounded-md ring-black items-center h-[40px] w-16 ">
                  <button onClick={() => provider.decreaseItem(storedItem.id)}>
                    -
                  </button>
                  <span className="font-bold">{itemQuantity}</span>
                  <button onClick={() => provider.increaseItem(storedItem.id)}>
                    +
                  </button>
                </div>
              ) : (
                <div className="flex gap-3 ring-1 p-2 rounded-md ring-gray-400 items-center h-[40px] w-16 ">
                  <button
                    onClick={() => provider.decreaseItem(storedItem.id)}
                    disabled={!itemQuantity}
                    className="text-gray-400"
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-400">
                    {itemQuantity}
                  </span>
                  <button
                    onClick={() => provider.increaseItem(storedItem.id)}
                    disabled={!itemQuantity}
                    className="text-gray-400"
                  >
                    +
                  </button>
                </div>
              )}
              <button
                onClick={() => provider.addItem(storedItem.id)}
                className="w-[300px] text-xl h-[40px] bg-green-600 text-white font-bold rounded-md"
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
