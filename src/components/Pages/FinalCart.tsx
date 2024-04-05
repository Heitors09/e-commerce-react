import { useContext } from "react";
import { ItemsContext } from "../Context/ProviderItem";
import { ArrowRight, ShoppingCart, Trash2Icon } from "lucide-react";

//interface Item {
//Name: string;
//id: string;
//url: string;
//price: number;
//promotion?: boolean;
//}

export function FinalCart() {
  const provider = useContext(ItemsContext);
  const cartItems = provider?.cartItems;

  return (
    <div className="flex items-start bg-slate-100 h-[100vh]">
      <div className="mt-[50px] flex flex-col items-center font-medium">
        <div className="h-6 drop-shadow-md bg-white rounded-md  m-[50px] ring-slate-200 w-[800px] flex justify-between px-7">
          <p>Items</p>
          <ul className="flex gap-7">
            <li>amount</li>
            <li>value</li>
          </ul>
        </div>
        <div className=" w-[800px]  flex flex-col gap-2 ">
          {cartItems?.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="flex h-20 min-w-[800px] bg-white items-center hover:bg-stone-100  drop-shadow-md rounded-md justify-between">
                <div className="flex items-center font-medium gap-2 pl-2">
                  <img
                    className=" object-contain size-12 ring-1 hover:scale-95 duration-200 ring-slate-100 hover:cursor-pointer rounded-md drop-shadow-md"
                    src={item.url}
                    alt="item selecionado"
                    onClick={() => provider.goToItemPage(item.id)}
                  />
                  <div>
                    <h3>{item.Name}</h3>
                    <footer className="text-[#878787] font-light">
                      size {item.size}
                    </footer>
                  </div>
                </div>
                <ul className="flex gap-6 px-4">
                  <li className="flex gap-3 ring-1 ring-black w-18 p-2 rounded-md  items-center h-6 ">
                    {item.quantity === 1 ? (
                      <button
                        onClick={() => provider?.deleteItem(item.id, item.size)}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          provider?.decreaseItem(item.id, item.size)
                        }
                      >
                        -
                      </button>
                    )}
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => provider?.increaseItem(item.id, item.size)}
                    >
                      +
                    </button>
                  </li>
                  <li className="font-medium w-14  flex justify-center">
                    ${item.price * item.quantity}
                  </li>
                </ul>
              </div>
              <button onClick={() => provider?.deleteItem(item.id, item.size)}>
                <Trash2Icon className="text-black hover:text-[#126edb]" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <aside className="flex flex-col gap-4 mt-[60px] w-64">
        <h2 className="flex gap-2 items-end justify-center font-medium">
          <ShoppingCart className="text-black  " />
          purchase summary
        </h2>
        <div className="flex justify-between drop-shadow-md rounded-md  px-5  bg-white font-medium">
          <h2>total</h2>
          <div className="flex gap-1">
            <p>$</p>
            {provider?.totalPrice}
          </div>
        </div>
        <button className="bg-[#126edb] group hover:scale-105 duration-200 text-white h-12 rounded-full font-bold text-sm flex items-center justify-center gap-8">
          <p>Go to Payment</p>
          <ArrowRight className="size-5 group-hover:translate-x-3 duration-200" />
        </button>
      </aside>
    </div>
  );
}
